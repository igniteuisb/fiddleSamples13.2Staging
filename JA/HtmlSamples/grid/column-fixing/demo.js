$(function () {

            /*----------------- Instantiation -------------------------*/
            createGrid();
        });

        function createGrid() {           

            $("#grid2").igGrid({
                columns: [
                    { headerText: "顧客 ID", key: "ID", dataType: "string", width: "10%" },
                    { headerText: "会社名", key: "CompanyName", dataType: "string", width: "15%" },
                    { headerText: "名前", key: "ContactName", dataType: "string", width: "15%" },
                    { headerText: "連絡先", key: "ContactTitle", dataType: "string", width: "15%" },
                    { headerText: "住所", key: "Address", dataType: "string", width: "15%" },
                    { headerText: "市", key: "City", dataType: "string", width: "15%" },
                    { headerText: "国名", key: "Country", dataType: "string", width: "15%" }
                ],
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                width: '98%',
                height: "400px",
                features: [                    
                    {
                        name: "ColumnFixing",
                        fixingDirection: 'left',
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