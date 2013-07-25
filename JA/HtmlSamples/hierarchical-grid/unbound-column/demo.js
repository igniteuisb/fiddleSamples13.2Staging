$(function () {
// the JavaScript function used for the formula property
        function CalculateFreightExpence(data, grid) {
            return 2.95 * data["Freight"];
        }

        $(function () {

            /*----------------- Event Examples -------------------------*/

            $("#grid3").on("iggriddatabound", function (event, ui) {
                var i, grid = ui.owner,
                     ds = grid.dataSource,
                     data = ds.data(),
                     dataLength = data.length;

                for (i = 0; i < dataLength; i++) {
                    if (data[i]["Country"] === "USA") {
                        data[i]["IsUSA"] = true;
                    }
                    else {
                        data[i]["IsUSA"] = false;
                    }
                }
            });

            /*----------------- Method & Option Examples -------------------------*/

            $("#setUnboundValues").click(function (e) {
                var i, freightVals = [], boolVals = [];
                for (i = 0; i < 20; i++) {
                    freightVals.push(Math.floor(Math.random() * 100));
                    boolVals.push(true);
                }

                $('#grid3').igGrid('setUnboundValues', 'IsUSA', boolVals);

                // get all expanded child grids
                var childGrids = $("#grid3").igHierarchicalGrid("allChildren");
                $(childGrids).each(function (index, grid) {
                    $(grid).igGrid("setUnboundValues", 'FreightExpence', freightVals);
                });
                return;
            });

            /*----------------- Instantiation -------------------------*/

            $("#grid3").igHierarchicalGrid({
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'EmployeeID',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'Address',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'Region',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'PostalCode',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'HomePhone',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "MultiColumnHeaders",
                        inherit: true
                    },
                    {
                        name: 'Hiding'
                    },
                    {
                        name: "GroupBy",
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: 'Resizing',
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: "Paging",
                        type: 'local',
                        pageSize: 5,
                        inherit: true
                    },
                    {
                        name: "Sorting",
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: "Summaries",
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: 'Filtering',
                        mode: 'advanced',
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: "Selection",
                        inherit: true
                    },
                    {
                        name: "RowSelectors",
                        inherit: true
                    },
                    {
                        name: 'Summaries',
                        type: 'local',
                        inherit: true
                    },
                    {
                        name: "Updating",
                        enableAddRow: true,
                        inherit: true,
                        editMode: "row",
                        enableDeleteRow: true,
                        columnSettings:
                            [
                                {
                                    columnKey: "EmployeeID",
                                    readOnly: true
                                },
                                {
                                    columnKey: "UnboundColumn1",
                                    readOnly: true
                                }
                            ]
                    }
                ],
                width: "100%",
                height: "95%",
                initialDataBindDepth: -1,
                loadOnDemand: false,
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                autoGenerateColumns: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "5%" },
                    { key: "LastName", headerText: "名字", dataType: "string", width: "10%" },
                    { key: "FirstName", headerText: "名前", dataType: "string", width: "10%" },
                    { key: "Title", headerText: "役職", dataType: "string", width: "10%" },
                    { key: "Address", headerText: "住所", dataType: "string", width: "15%" },
                    { key: "City", headerText: "市", dataType: "string", width: "10%" },
                    { key: "PostalCode", headerText: "郵便番号", dataType: "string", width: "10%" },
                    { key: "IsUSA", headerText: "米国内", unbound: true, dataType: "bool", width: "5%", format: "checkbox" },
                    { key: "Region", headerText: "領域", dataType: "string", width: "5%" },
                    { key: "Country", headerText: "国名", dataType: "string", width: "10%" },
                ],
                childrenDataProperty: "Orders",                
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        width: "100%",
                        height: "95%",
                        columns: [
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "5%" },
                            { key: "CustomerID", headerText: "顧客 ID", dataType: "string", width: "5%" },
                            { key: "Freight", headerText: "輸送", dataType: "string", width: "15%" },
                            { key: "FreightExpence", headerText: "輸送費", unbound: true, dataType: "number", width: "15%", formula: "CalculateFreightExpence" },
                            { key: "ShipName", headerText: "出荷名", dataType: "string", width: "15%" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "15%" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "10%" },
                        ],
                        features: [
                            {
                                name: 'Responsive',
                                enableVerticalRendering: false,
                                columnSettings: [
                                    {
                                        columnKey: 'OrderID',
                                        classes: 'hidden-phone'
                                    },
                                    {
                                        columnKey: 'CustomerID',
                                        classes: 'hidden-phone'
                                    },
                                    {
                                        columnKey: 'ShipName',
                                        classes: 'hidden-phone'
                                    }
                                ]
                            },
                            {
                                name: "MultiColumnHeaders"
                            },
                            {
                                name: "Paging",
                                type: 'local',
                                pageSize: 5
                            },
                            {
                                name: "Updating",
                                enableAddRow: true,
                                editMode: "row",
                                enableDeleteRow: true,
                                columnSettings:
                                [
                                    {
                                        columnKey: "OrderID",
                                        readOnly: true
                                    },
                                    {
                                        columnKey: "UnboundColumnChild",
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });
});