$(function () {
            var gridHistoryJS,
                manualStateChange = false, // true: fired by history go() and back() methods; false: fired when state is added to the history object.
                reverseState = [],
                tempParams = "",
                notBound = true;


            //--> Save igGrid state in the browser history object
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
                        { headerText: "名前", key: "name", dataType: "string", width: "12%" },
                        { headerText: "チーム", key: "team", dataType: "string", width: "15%" },
                        { headerText: "年齢", key: "age", dataType: "number", width: "7%" },
                        { headerText: "番号", key: "number", dataType: "number", width: "7%" },
                        { headerText: "ポジション", key: "position", dataType: "string", width: "8%" },
                        { headerText: "ゴール", key: "goals", dataType: "number", width: "10%" },
                        { headerText: "アシスト", key: "assists", dataType: "number", width: "10%" },
                        { headerText: "イエローカード", key: "yellow", dataType: "number", width: "10%" },
                        { headerText: "レッドカード", key: "red", dataType: "number", width: "7%" },
                        { headerText: "給与", key: "salary", format: "currency", width: "8%" }
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
                                fillReverseState("page", null, args.currentPageIndex);
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
                                fillReverseState("sort", args.columnKey, args.direction === "ascending" ? "descending" : "ascending");
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
                    }
            	});
            	return grid;
            })();

            function fillReverseState(feature, column, oldValue) {
            	var index = window.History.savedStates.length, pos;
                if (reverseState.length === 0) for (index = 0; index < window.History.savedStates.length; index++) reverseState[index] = null;
                pos = previousPosition(feature, column);
                if (pos < 0) {
                    reverseState[index] = oldValue;
                } else if (pos === 0) {
                    reverseState[index] = null;
                } else {
                    reverseState[index] = pos.data.value;
                }
            }

            function previousPosition(feature, column) {
                var states = window.History.savedStates,
                    length = states.length,
                    index;
                debugger;
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
            //<-- Save igGrid state in the browser history object

            //--> Recover igGrid state from the browser history object
            if (window.History && window.History.Adapter && notBound) {
            	notBound = false;
                window.History.Adapter.bind(window, 'statechange', function (e, args) {
                	var currState, state, prevState, stateOccurances, isBack;

                    if (manualStateChange == true) { // Fired only when called externally from browser buttons
                        currState = window.History.getState()
                        state = currState.data,
                        stateOccurances = getStateOccurances(currState.id);

                        if (!isBack) {
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
                        } else { // Unload previous state
                            prevState = window.History.savedStates[window.History.savedStates.length - 2].data;
                            if(prevState.key )
                            switch (prevState.key) {
                            	case "page": gridHistoryJS.igGridPaging("pageIndex", 0);
                            	case "filter": gridHistoryJS.igGridFiltering("filter", ([])); break;
                            	case "sort": gridHistoryJS.igGridSorting("unsortColumn", prevState.value[0]); break;
                                default: break;
                            }
                        }
                    }
                    manualStateChange = true;

                    if (window.location.search === "" & tempParams !== "") {
                        window.History.pushState(null, null, tempParams);
                        tempParams = "";
                    }
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
            $("#copy").igButton().click(function () { window.prompt("URL をコピーして新しいタブまたはブラウザーで開く", window.location); });
            $("#mail").igButton().click(function () {
                var link = "mailto: "
                         + "&subject=" + escape("プレーヤーのリスト")
                         + "&body=" + escape("プレーヤーのカスタム リストはこちら: " + window.location);
                window.location.href = link;
            });

            if ((tempParams = window.location.search) !== "") {
                loadInitialStateFromUrl();
            }
        });