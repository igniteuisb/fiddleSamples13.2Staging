$(function () {
            var grid = $("#grid"),
                manualStateChange = false;
            if (window.History && window.History.Adapter) {
            window.History.Adapter.bind(window, 'statechange', function (e, args) {
                var state, prevState;
                if (manualStateChange == true) { // Fired only when called externally from browser buttons
                    state = window.History.getState().data,
                    historyStates = window.History.savedStates,
                    prevState = historyStates[historyStates.length - 2].data;

                    if (state.key !== undefined) { // If there is at least one gird state in the browser history
                        switch (state.key) { // Load current state
                        case "page": grid.igGridPaging("pageIndex", state.value - 1); break;
                        case "sort": grid.igGridSorting("sortColumn", state.value[0], state.value[1]); break;
                        case "resize": grid.igGridResizing("resize", state.value[0], state.value[1]); break;
                        case "group":
                            grid.igGridGroupBy("ungroupAll");
                            if (!grid.igGridGroupBy("checkColumnIsGrouped")) grid.igGridGroupBy("groupByColumn", state.value);
                            break;
                        case "hide":
                            if (state.value.split("_")[1]) {
                                grid.igGridHiding("hideColumn", state[0]);
                            } else {
                                grid.igGridHiding("showColumn", state[0]);
                            }
                            break;
                        case "filter": grid.igGridFiltering("filter", ([{ fieldName: state.value[0], expr: state.value[2], cond: state.value[1] }])); break;
                    }
                }

                    if (prevState.key !== state.key) {
                        switch (prevState.key) { // Unload previous state
                            case "filter": grid.igGridFiltering("filter", ([])); break;
                            case "sort": grid.igGridSorting("unsortColumn", state.value[0], state.value[1]); break;
                            default: break;
                        }
                    }
                }
                manualStateChange = true;
            });
            }

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

            function loadGridState(key, value) {
                switch (key) {
                    case "page": grid.igGridPaging("pageIndex", value - 1); break;
                    case "sort": grid.igGridSorting("sortColumn", value.split("_")[0], value.split("_")[1]); break;
                    case "resize": grid.igGridResizing("resize", value.split("_")[0], value.split("_")[1]); break;
                    case "group": grid.igGridGroupBy("groupByColumn", value); break;
                    case "hide":
                        if (value.split("_")[1]) {
                            grid.igGridHiding("hideColumn", value.split("_")[0]);
                        } else {
                            grid.igGridHiding("showColumn", value.split("_")[0]);
                        }
                        break;
                    case "filter": grid.igGridFiltering("filter", [{ fieldName: value.split("_")[0], expr: value.split("_")[2], cond: value.split("_")[1] }]); break;
                }
            }

            $("#back").igButton().click(function () { window.History.back(); });
            $("#forward").igButton().click(function () { window.History.forward(); });
            $("#copy").igButton().click(function () { window.prompt("Copy URL and open it in a new tab or browser", window.location); });
            $("#mail").igButton().click(function () {
                var link = "mailto: "
                         + "&subject=" + escape("List with Footballers")
                         + "&body=" + escape("Custom List with footballers can be found here: " +  window.location);
                window.location.href = link;
            });

            function pushToBrowserHistory(state, title, url) {
                manualStateChange = false;
                $(state).extend({ "manualStateChange" : false });
                window.History? window.History.pushState(state, title, url): "";
            }

            function formURL(key, value, multiple) {
                var params = window.location.search,
                    urlValue = value, urlIndex;

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
                    params = params.replace(key + "=" + extractURLValue(key), key + "=" + urlValue);
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

            function isEmptyValue(value) {
                return value.length === 0;
            }

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
                        pageIndexChanged: function (e, args) {
                            var pageIndex = args.pageIndex + 1,
                                state = { key: "page", value: pageIndex },
                                title = "Paging";
                            pushToBrowserHistory(state, title, formURL("page", pageIndex));
                        }
                    },
                    {
                        name: "Sorting",
                        type: "local",
                        columnSorted: function (e, args) {
                            var columnKey = args.columnKey,
                                dir = args.direction,
                                state = { key: "sort", value: [columnKey, dir] },
                                title = "Sorting";
                            pushToBrowserHistory(state, title, formURL("sort", [columnKey, dir]));
                        }
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        dataFiltered: function (e, args) {
                            var columnKey = args.columnKey,
                                expr = args.owner.grid.dataSource.settings.filtering.expressions[0],
                                title = "Filtering",
                                state, settings;
                            if (expr === undefined) {
                                settings = [];
                            } else {
                                settings = [columnKey, expr.cond, expr.expr];
                            }
                            state = { key: "filter", value: settings };
                            pushToBrowserHistory(state, title, formURL("filter", settings));
                        }
                    },
                    {
                        name: "Resizing",
                        columnResized: function (e, args) {
                            var columnKey = args.columnKey,
                               width = args.originalWidth,
                               state = { key: "resize", value: [columnKey, width] },
                               title = "Resizing";
                            pushToBrowserHistory(state, title, formURL("resize", [columnKey, width]));
                        }
                    },
                    {
                        name: "Hiding",
                        columnHidden: function (e, args) {
                            var columnKey = args.columnKey,
                               state = { key: "hide", value: columnKey },
                               title = "Hiding";
                            pushToBrowserHistory(state, title, formURL("hide", [columnKey, true]));
                        },
                        columnShown: function (e, args) {
                            var columnKey = args.columnKey,
                               state = { key: "hide", value: columnKey },
                               title = "Hiding";
                            pushToBrowserHistory(state, title, formURL("hide", [columnKey, false]));
                        }
                    },
                    {
                        name: "GroupBy",
                        groupedColumnsChanged: function (e, args) {
                            var columnKey = args.key;
                               state = { key: "group", value: columnKey },
                               title = "GroupBy";
                            pushToBrowserHistory(state, title, formURL("group", columnKey));
                        }
                    }
                ],
                rendered: function (e, args) {
                    args.owner.element.find("tr td").css("text-align", "center");
                    args.owner.element.find("tr td:first-child").css("text-align", "left");
                    args.owner.element.find("tr td:last-child").css("text-align", "right");
                }
            });
            if (window.location.search !== "") {
                loadInitialStateFromUrl();
            }
        });