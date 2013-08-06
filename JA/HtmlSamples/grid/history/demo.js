$(function () {
            var grid = $("#grid");
            window.History.Adapter.bind(window, 'statechange', function (e, args) {
                var state = window.History.getState().data,
                    prevState = window.History;

                switch (state.key) {
                    case "page": if (grid.igGridPaging("pageIndex") !== state.value - 1) grid.igGridPaging("pageIndex", state.value - 1); break;
                    case "sort": if (grid.data('igGrid').dataSource.settings.sorting.expressions[0].fieldName !== state.value[0]) grid.igGridSorting("sortColumn", state.value[0], state.value[1]); break;
                    case "resize": grid.igGridResizing("resize", state.value[0], state.value[1]); break;
                    case "move": grid.igGridColumnMoving("groupByColumn", state.value); break;
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
            });

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
                    case "move": grid.igGridColumnMoving("moveColumn", value.split("_")[0], value.split("_")[1], true, true); break;
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

            $("#prev").click(function () { window.History.back(); });
            $("#next").click(function () { window.History.forward(); });
            $("#copy").click(function () { window.prompt("Use this URL and send it", window.location); });

            function pushToBrowserHistory(state, title, url) {
                window.History.pushState(state, title, url);
            }

            function formURL(key, value, multiple) {
                var params = window.location.search,
                    urlValue = value, urlIndex;

                if (value instanceof Array) {
                    urlValue = value[0];
                    for (urlIndex = 1; urlIndex < value.length; urlIndex++) {
                        urlValue +=  "_" + value[urlIndex];
                    }
                }
                if (params === "") {
                    params = "?" + key + "=" + urlValue;
                } else if (params.indexOf(key + "=") === -1) {
                    params = params + "&" + key + "=" + urlValue;
                } else {
                    params = params.replace(key + "=" + extractURLValue(key), key + "=" + urlValue);
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

            grid.igGrid({
                primaryKey: "name",
                width: '100%',
                columns: [
                    //{ headerText: "名前", key: "name", dataType: "string", width: "12%" },
                    //{ headerText: "チーム", key: "team", dataType: "string", width: "15%" },
                    //{ headerText: "年齢", key: "age", dataType: "number", width: "7%" },
                    //{ headerText: "番号", key: "number", dataType: "number", width: "7%" },
                    //{ headerText: "ポジション", key: "position", dataType: "string", width: "8%" },
                    //{ headerText: "ゴール", key: "goals", dataType: "number", width: "10%" },
                    //{ headerText: "アシスト", key: "assists", dataType: "number", width: "10%" },
                    //{ headerText: "イエローカード", key: "yellow", dataType: "number", width: "10%" },
                    //{ headerText: "レッドカード", key: "red", dataType: "number", width: "7%" },
                    //{ headerText: "給与", key: "salary", format: "currency", width: "8%" }

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
                                state = { key: "filter", value: [columnKey, expr.cond, expr.expr] };
                            pushToBrowserHistory(state, title, formURL("filter", [columnKey, expr.cond, expr.expr]));
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
                    },
                    {
                        name: "ColumnMoving",
                        columnMoved: function (e, args) {
                            var columnKey = args.columnKey,
                               newIndex = args.oldIndex,
                               oldIndex = args.newIndex,
                               state = { key: "move", value: [columnKey, newIndex, oldIndex] },
                               title = "Moving";
                            pushToBrowserHistory(state, title, formURL("move", [columnKey, newIndex, oldIndex]));
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