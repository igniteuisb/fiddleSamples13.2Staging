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

            $("#grid").igGrid({
                height: "100%",
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                   { key: "EmployeeID", headerText: "社員 ID", dataType: "number"},
                   { key: "LastName", headerText: "名前", dataType: "string" },
                   { key: "FirstName", headerText: "名字", dataType: "string" },
                   { key: "Title", headerText: "役職", dataType: "string" },
                   { key: "Address", headerText: "住所", dataType: "string" },
                   { key: "City", headerText: "市", dataType: "string"},
                   { key: "Region", headerText: "州", dataType: "string" },
                   { key: "Country", headerText: "国名", dataType: "string" }
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