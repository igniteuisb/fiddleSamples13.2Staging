$(function () {
        	var gridHistoryJS,
                manualStateChange = false, // true: fired by history go() and back() methods; false: fired when state is added to the history object.
                reverseState = [],
                historyLength = window.History.storedStates.length;


        	//--> Save igGrid state in the browser history object
        	function addUndoState(feature, column, oldValue, possibleUndo) {
        		var currState = window.History.getState(), data, undo = false;
        		pos = previousPosition(feature, column);
        		if (pos < 0) {
        			data = { key: feature, value: [column, oldValue] };
        			undo = possibleUndo !== undefined;
        		} else if (pos === 0) {
        			data = null;
        		} else {
        			data = pos.data;
        		}
        		if (undo !== undefined) {
        			data = $(data).extend({ undo: undo });
        		}
        		$(currState).extend({ undoData: data });
        	}
            function previousPosition(feature, column) {
            	var states = window.History.savedStates,
                    length = states.length,
                    index;
            	for (index = length - 1; index >= 0; index--) {
            		if (states[index].data.key === feature &&
                        (column === null || column !== null && states[index].data.value.indexOf(column) > -1)) {
            			if (index === length - 1) {
            				return 0;
            			} else {
            				return states[index];
            			}
            		}
            	}
            	return -1;
            }
            function pushToBrowserHistory(state, title, url) {
            	manualStateChange = false;
            	$(state).extend({ "manualStateChange": false });
            	window.History ? window.History.pushState(state, title, url) : "";
            }

            gridHistoryJS = (function initGrid() {
            	var grid = $("#gridHistoryJS");
            	grid.igGrid({
                    primaryKey: "name",
                    width: '100%',
                    columns: [
                        { headerText: "Name", key: "name", dataType: "string", width: "12%" },
                        { headerText: "Team", key: "team", dataType: "string", width: "15%" },
                        { headerText: "Age", key: "age", dataType: "number", width: "7%" },
                        { headerText: "No.", key: "number", dataType: "number", width: "7%" },
                        { headerText: "Pos.", key: "position", dataType: "string", width: "8%" },
                        { headerText: "Goals", key: "goals", dataType: "number", width: "10%" },
                        { headerText: "Assists", key: "assists", dataType: "number", width: "10%" },
                        { headerText: "Yellow C.", key: "yellow", dataType: "number", width: "10%" },
                        { headerText: "Red C.", key: "red", dataType: "number", width: "7%" },
                        { headerText: "Salary", key: "salary", format: "currency", width: "8%" }
                    ],
                    autofitLastColumn: false,
                    autoGenerateColumns: false,
                    dataSource: dataSource,
                    features: [
                        {
                            name: "Paging",
                            type: "local",
                            pageSize: 10,
                            showPageSizeDropDown: false,
                            pageIndexChanging: function (e, args) {
                            	addUndoState("page", null, args.currentPageIndex + 1);
                            },
                            pageIndexChanged: function (e, args) {
                                var pageIndex = args.pageIndex + 1,
                                    state = { key: "page", value: pageIndex };
                                pushToBrowserHistory(state, null, formURL("page", pageIndex));
                            }
                        },
                        {
                            name: "Sorting",
                            type: "local",
                            mode: "multi",
                            columnSorting: function (e, args) {
                            	addUndoState("sort", args.columnKey, args.direction === "ascending" ? "descending" : "ascending", "unsort");
                            },
                            columnSorted: function (e, args) {
                                var columnKey = args.columnKey,
                                    dir = args.direction,
                                    state = { key: "sort", value: [columnKey, dir] };
                                if (!isEmptyValue(columnKey) && !isEmptyValue(dir)) {
                                    pushToBrowserHistory(state, null, formURL("sort", [columnKey, dir]));
                                }
                            }
                        },
                        {
                            name: "Filtering",
                            type: "local",
                            dataFiltered: function (e, args) {
                                var columnKey = args.columnKey,
                                    expr = args.owner.grid.dataSource.settings.filtering.expressions[0],
                                    state, settings;
                                if (expr === undefined) {
                                    settings = [];
                                } else {
                                    settings = [columnKey, expr.cond, expr.expr];
                                }
                                state = { key: "filter", value: settings };
                                pushToBrowserHistory(state, null, formURL("filter", settings));
                            }
                        },
                        {
                            name: "Resizing",
                            columnResized: function (e, args) {
                                var columnKey = args.columnKey,
                                   width = args.originalWidth,
                                   state = { key: "resize", value: [columnKey, width] };
                                pushToBrowserHistory(state, null, formURL("resize", [columnKey, width]));
                            }
                        },
                        {
                            name: "Hiding",
                            columnHidden: function (e, args) {
                                var columnKey = args.columnKey,
                                   state = { key: "hide", value: columnKey };
                                pushToBrowserHistory(state, null, formURL("hide", [columnKey, true]));
                            },
                            columnShown: function (e, args) {
                                var columnKey = args.columnKey,
                                   state = { key: "hide", value: columnKey };
                                pushToBrowserHistory(state, null, formURL("hide", [columnKey, false]));
                            }
                        },
                        {
                            name: "GroupBy",
                            groupedColumnsChanged: function (e, args) {
                                var columnKey = args.key;
                                state = { key: "group", value: columnKey };
                                pushToBrowserHistory(state, null, formURL("group", columnKey));
                            }
                        }
                    ],
                    rendered: function (e, args) {
                        args.owner.element.find("tr td").css("text-align", "center");
                        args.owner.element.find("tr td:first-child").css("text-align", "left");
                        args.owner.element.find("tr td:last-child").css("text-align", "right");

                        setTimeout(function () {
                        	// Load Grid state from URL
                        	loadInitialStateFromUrl();
                        	if (window.location.search === "") {
                        		// By default "goals" and "assists" columns are sorted
                        		/*args.owner.element.igGridSorting("sortColumn", "goals", "descending");
                        		pushToBrowserHistory({ key: "sort", value: ["goals", "descending"] }, null, formURL("sort", ["goals", "descending"]));
                        		args.owner.element.igGridSorting("sortColumn", "assists", "descending");
                        		pushToBrowserHistory({ key: "sort", value: ["assists", "descending"] }, null, formURL("sort", ["assists", "descending"]));*/
                        	}
                        }, 500);
                    }
            	});
            	return grid;
            })();
            //<-- Save igGrid state in the browser history object

        	//--> Recover igGrid state from the browser history object
            if (window.History && window.History.Adapter) {
            	window.History.Adapter.bind(window, 'statechange', function (e, args) {
            		var currState, state, prevState, stateOccurances,
						isBackForward = (window.History.storedStates.length - historyLength) === 1;

            		if ($("#sample-title")[0] !== undefined && $("#sample-title")[0].textContent.toLowerCase() !== "history.js integration") {
            			// This check is not related to history.js integaration. It's done to integrate the sample with the Samples Browser.
                		return;
            		}
            		historyLength = window.History.storedStates.length;
                    if (manualStateChange === true) { // Fired only when called externally from browser buttons
                        currState = window.History.getState()
                        state = currState.data,
                        stateOccurances = getStateOccurances(currState.id);

                        switch (state.key) { // Load current state
                            case "page": gridHistoryJS.igGridPaging("pageIndex", state.value - 1); break;
                            case "sort": gridHistoryJS.igGridSorting("sortColumn", state.value[0], state.value[1]); break;
                            case "resize": gridHistoryJS.igGridResizing("resize", state.value[0], state.value[1]); break;
                            case "group":
                                gridHistoryJS.igGridGroupBy("ungroupAll");
                                if (!gridHistoryJS.igGridGroupBy("checkColumnIsGrouped")) gridHistoryJS.igGridGroupBy("groupByColumn", state.value);
                                break;
                            case "hide":
                                if (state.value.split("_")[1]) {
                                    gridHistoryJS.igGridHiding("hideColumn", state[0]);
                                } else {
                                    gridHistoryJS.igGridHiding("showColumn", state[0]);
                                }
                                break;
                            case "filter": gridHistoryJS.igGridFiltering("filter", ([{ fieldName: state.value[0], expr: state.value[2], cond: state.value[1] }])); break;
                        }
                        if (isBackForward) { // Load/Unload previous state
                            if(prevState.key )
                            switch (prevState.key) {
                            	case "page": gridHistoryJS.igGridPaging("pageIndex", 0);
                            	case "filter": gridHistoryJS.igGridFiltering("filter", ([])); break;
                            	case "sort": gridHistoryJS.igGridSorting("unsortColumn", prevState.value[0]); break;
                                default: break;
                            }
                        }
                    }
                    manualStateChange = false;
                });
            }

            function getStateOccurances(id) {
                var historyStates = window.History.savedStates, index, count = 0;
                for (index = 0; index < historyStates.length - 1; index++) {
                    if (historyStates[index].id === id) count++;
                }
                return count;
            }

            function getLastOccurance(state) {
                var historyStates = window.History.savedStates, index;
            }
            //<-- Recover igGrid state from the browser history object

            //--> Load igGrid state from the browser URL
            function loadInitialStateFromUrl() {
                var params = window.location.search, index, arrKeyValue;
                if (params !== "") {
                    pairs = params.substring(1, params.length).split("&");
                    for (index = 0; index < pairs.length; index++) {
                        arrKeyValue = pairs[index].split("=");
                        loadGridState(arrKeyValue[0], arrKeyValue[1]);
                    }
                }
            };
            //<-- Load igGrid state from the browser URL

            //--> Load individual igGrid features
            function loadGridState(key, value) {
                switch (key) {
                    case "page": loadPagingState(key, value); break;
                    case "sort": loadSortingState(key, value); break;
                	case "resize": gridHistoryJS.igGridResizing("resize", value.split("_")[0], value.split("_")[1]); break;
                	case "group": gridHistoryJS.igGridGroupBy("groupByColumn", value); break;
                    case "hide":
                        if (value.split("_")[1]) {
                        	gridHistoryJS.igGridHiding("hideColumn", value.split("_")[0]);
                        } else {
                        	gridHistoryJS.igGridHiding("showColumn", value.split("_")[0]);
                        }
                        break;
                	case "filter": gridHistoryJS.igGridFiltering("filter", [{ fieldName: value.split("_")[0], expr: value.split("_")[2], cond: value.split("_")[1] }]); break;
                }
            }

            function loadPagingState(key, value) {
            	gridHistoryJS.igGridPaging("pageIndex", value - 1);
            }

            function loadSortingState(key, value) {
                var columns = value.split(";"), i;
                for (i = 0; i < columns.length; i++) {
                	gridHistoryJS.igGridSorting("sortColumn", columns[i].split("_")[0], columns[i].split("_")[1]);
                }
            }
            //<-- Load individual igGrid features

            //--> Create URL 
            function formURL(key, value, multiple) {
                var params = window.location.search,
                    urlValue = value, urlIndex, currentUrl, currentColumnState;

                if (isEmptyValue(value)) { // remove parameters encoded in the URL
                    urlIndex = params.indexOf(key + "=");
                    params = params.replace(key + "=" + extractURLValue(key), "");
                    if (params === "?") {
                        params = "";
                    } else {
                        params = params.substring(0, urlIndex - 1) + params.substring(urlIndex, params.length);
                    }
                } else { // add parameters encoded in the URL
                    if (value instanceof Array) {
                        urlValue = value[0];
                        for (urlIndex = 1; urlIndex < value.length; urlIndex++) {
                                urlValue += "_" + value[urlIndex];
                        }
                    }
                    if (params === "") {
                        params = "?" + key + "=" + urlValue;
                    } else if (params.indexOf(key + "=") === -1) {
                        params = params + "&" + key + "=" + urlValue;
                    } else {
                        currentUrl = key + "=" + extractURLValue(key);
                        if (key === "page") {
                            params = params.replace(currentUrl, key + "=" + urlValue);
                        } else {
                            currentColumnState = value[0] + "_";
                            if (currentUrl.indexOf(currentColumnState) > -1) {
                                params = params.replace(getColumnState(currentUrl, currentColumnState), urlValue);
                            } else {
                                params = params.replace(currentUrl, currentUrl + ";" + urlValue);
                            }
                        }
                    }
                }
                return params;
            }

            function extractURLValue(key) {
                var params = window.location.search,
                    value = "";
                value = params.substring(params.indexOf(key), params.length);
                value = value.substring(key.length + 1, (value.indexOf("&") > -1) ? value.indexOf("&") : value.length);
                return value;
            }

            function getColumnState(featureUrl, column) {
                var state, columnStartIndex, columnEndIndex;
                columnStartIndex = featureUrl.indexOf(column);
                state = featureUrl.substring(columnStartIndex, featureUrl.length);
                columnEndIndex = state.indexOf("&") > -1 ? state.indexOf("&") : state.length;
                state = state.substring(0, columnEndIndex);
                columnEndIndex = state.indexOf(";") > -1 ? state.indexOf(";") : state.length;
                state = state.substring(0, columnEndIndex);
                return state;
            }
            //<-- Create URL

            function isEmptyValue(value) {
                return value === undefined || value === null || value.length === 0;
            }

            $("#back").igButton().click(function () { window.History.back(); });
            $("#forward").igButton().click(function () { window.History.forward(); });
            $("#copy").igButton().click(function () { window.prompt("Copy URL and open it in a new tab or browser", window.location); });
            $("#mail").igButton().click(function () {
                var link = "mailto: "
                         + "&subject=" + escape("List with Footballers")
                         + "&body=" + escape("Custom List with footballers can be found here: " + window.location);
                window.location.href = link;
            });
        });