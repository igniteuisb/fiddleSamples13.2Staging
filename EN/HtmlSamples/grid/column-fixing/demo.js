$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            $("input[name='initialFixDirection']").click(function () {
                $("#grid2").igGridColumnFixing("destroy");
                $("#grid2").igGrid("destroy");
                createGrid();
            });

            /*----------------- Event Examples -------------------------*/
            // Event: columnFixed
            $("#grid2").on("iggridcolumnfixingcolumnfixed", function (evt, ui) {
                var message = "columnFixed event was fired with column key: " + ui.columnIdentifier + "<br/>";
                apiViewer.log(message);
                return;
            });
            // Event: columnUnfixed
            $("#grid2").on("iggridcolumnfixingcolumnunfixed", function (evt, ui) {
                var message = "columnUnfixed event was fired with column key: " + ui.columnIdentifier + "<br/>";
                apiViewer.log(message);
                return;
            });
            // Event: columnFixingRefused
            $("#grid2").on("iggridcolumnfixingcolumnfixingrefused", function (evt, ui) {
                var message = "columnFixingRefused event was fired with column key: " + ui.columnIdentifier + "<br/>";
                apiViewer.log(message);
                return;
            });

            /*----------------- Instantiation -------------------------*/
            createGrid();
        });

        function createGrid() {
            var initialDirection = $('input:radio[name=initialFixDirection]:checked').val();

            $("#grid2").igGrid({
                columns: [
                    { headerText: "Customer ID", key: "ID", dataType: "string", width: "10%" },
                    { headerText: "Company Name", key: "CompanyName", dataType: "string", width: "15%" },
                    { headerText: "Contact Name", key: "ContactName", dataType: "string", width: "15%" },
                    { headerText: "Contact Title", key: "ContactTitle", dataType: "string", width: "15%" },
                    { headerText: "Address", key: "Address", dataType: "string", width: "15%" },
                    { headerText: "City", key: "City", dataType: "string", width: "15%" },
                    { headerText: "Country", key: "Country", dataType: "string", width: "15%" }
                ],
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                width: '98%',
                height: "400px",
                features: [                    
                    {
                        name: "ColumnFixing",
                        fixingDirection: initialDirection,
                        columnSettings: [
                            {
                                columnKey: "CompanyName",
                                isFixed: true,
                                allowFixing: false
                            },
                            {
                                columnKey: "ContactName",
                                isFixed: true
                            },
                            {
                                columnKey: "ContactTitle",
                                allowFixing: false
                            }
                        ]
                    }
                ]
            });
        }