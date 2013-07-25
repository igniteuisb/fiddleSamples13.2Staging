$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            $("input[name='cellMergingInitialState']").click(function () {
                $("#grid1").igHierarchicalGrid("destroy");
                createGrid();
            });

            /*----------------- Event Examples -------------------------*/

            $(document).on("iggridcellmergingcellsmerged", "#grid1", function (evt, ui) {
                var message = "Logging cellsMerged event";
                apiViewer.log(message);
                message = "The index of the row the merged group starts in is: " + ui.rowIndex;
                apiViewer.log(message);
                message = "The key of the row the merged group starts in is: " + ui.rowKey;
                apiViewer.log(message);
                message = "The cells value which is repeated and caused the merged group to be created is: " + ui.value;
                apiViewer.log(message);
                message = "The total count of cells that were merged is: " + ui.count;
                apiViewer.log(message);
                apiViewer.log('<br/>');
                return;
            });

            /*----------------- Instantiation -------------------------*/
            createGrid();
        });
       

        function createGrid() {
            var initialState = $('input:radio[name=cellMergingInitialState]:checked').val();
            $("#grid1").remove();
            $("<table id='grid1'></table>").appendTo("#gridContainer").igHierarchicalGrid({
                height: "100%",
                width: "100%",
                autoCommit: true,
                autoGenerateColumns: false,
                dataSource: northwind,
                initialDataBindDepth: -1,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "10%" },
                   { key: "LastName", headerText: "First Name", dataType: "string", width: "15%" },
                   { key: "FirstName", headerText: "Last Name", dataType: "string", width: "15%" },
                   { key: "Title", headerText: "Title", dataType: "string", width: "10%" },
                   { key: "Address", headerText: "Address", dataType: "string", width: "15%" },
                   { key: "City", headerText: "City", dataType: "string", width: "15%" },
                   { key: "Region", headerText: "Region", dataType: "string", width: "10%" },
                   { key: "Country", headerText: "Country", dataType: "string", width: "10%" }
                ],
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
                            }
                        ]
                    },
                    {
                        name: 'CellMerging',
                        inherit: true,
                        initialState: initialState
                    },
                    {
                        name: 'Sorting',
                        type: 'local',
                        inherit: true,
                        applySortedColumnCss: false
                    }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        autoCommit: true,
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        width: "100%",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "10%" },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "25%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "20%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "20%" }
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
                                        columnKey: 'ShipName',
                                        classes: 'hidden-phone'
                                    }
                                ]
                            },
                            {
                                name: "Paging",
                                pageSize: 10
                            }
                        ]
                    }
                ]
            });
        }