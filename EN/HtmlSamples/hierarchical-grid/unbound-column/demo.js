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
                    { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "5%" },
                    { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                    { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                    { key: "Title", headerText: "Title", dataType: "string", width: "10%" },
                    { key: "Address", headerText: "Address", dataType: "string", width: "15%" },
                    { key: "City", headerText: "City", dataType: "string", width: "10%" },
                    { key: "PostalCode", headerText: "Postal Code", dataType: "string", width: "10%" },
                    { key: "IsUSA", headerText: "In USA", unbound: true, dataType: "bool", width: "5%", format: "checkbox" },
                    { key: "Region", headerText: "Region", dataType: "string", width: "5%" },
                    { key: "Country", headerText: "Country", dataType: "string", width: "10%" },
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
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "5%" },
                            { key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "5%" },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "FreightExpence", headerText: "Freight Expense", unbound: true, dataType: "number", width: "15%", formula: "CalculateFreightExpence" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "15%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "15%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "10%" },
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