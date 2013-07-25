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
                var message = "cellsMerged イベントのログ有効";
                apiViewer.log(message);
                message = "結合グループの開始行インデックス: " + ui.rowIndex;
                apiViewer.log(message);
                message = "結合グループの開始行キー: " + ui.rowKey;
                apiViewer.log(message);
                message = "結合グループを作成し、繰り返されたセル値: " + ui.value;
                apiViewer.log(message);
                message = "結合セルの合計数: " + ui.count;
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
                   { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "10%" },
                   { key: "LastName", headerText: "名前", dataType: "string", width: "15%" },
                   { key: "FirstName", headerText: "名字", dataType: "string", width: "15%" },
                   { key: "Title", headerText: "役職", dataType: "string", width: "10%" },
                   { key: "Address", headerText: "住所", dataType: "string", width: "15%" },
                   { key: "City", headerText: "市", dataType: "string", width: "15%" },
                   { key: "Region", headerText: "領域", dataType: "string", width: "10%" },
                   { key: "Country", headerText: "国名", dataType: "string", width: "10%" }
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
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "10%" },
                            { key: "Freight", headerText: "輸送", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "出荷名", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "25%" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "20%" },
                            { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "20%" }
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