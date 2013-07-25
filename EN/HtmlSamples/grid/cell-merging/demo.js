$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            $("input[name='cellMergingInitialState']").click(function () {
                $("#grid").igGrid("destroy");
                createGrid();
            });

            /*----------------- Event Examples -------------------------*/

            $("#grid").on("iggridcellmergingcellsmerged", function (evt, ui) {
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

            $("#grid").igGrid({
                height: "100%",
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number"},
                   { key: "LastName", headerText: "First Name", dataType: "string" },
                   { key: "FirstName", headerText: "Last Name", dataType: "string" },
                   { key: "Title", headerText: "Title", dataType: "string" },
                   { key: "Address", headerText: "Address", dataType: "string" },
                   { key: "City", headerText: "City", dataType: "string"},
                   { key: "Region", headerText: "Region", dataType: "string" },
                   { key: "Country", headerText: "Country", dataType: "string" }
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
                                columnKey: 'LastName',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: 'CellMerging',
                        initialState: initialState
                    },
                    {
                        name: 'Sorting',
                        type: 'local',
                        applySortedColumnCss: false
                    }
                ]
            });
        }