$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                height: "400px",
                columns: [
                    { headerText: "注文 ID", key: "OrderID", dataType: "number", width: "10%" },
                    { headerText: "注文日", key: "OrderDate", dataType: "date", width: "10%" },
                    { headerText: "出荷名", key: "ShipName", dataType: "string", width: "30%" },
                    { headerText: "配送先市町村", key: "ShipCity", dataType: "string", width: "15%" },
                    { headerText: "Ship Country", key: "ShipCountry", dataType: "string", width: "20%" },
                    { headerText: "顧客住所", key: "City", dataType: "string", width: "15%" }
                ],
                dataSource: northwindInvoices,
                features: [
                    {
                        name: 'GroupBy'
                    }
                ]
            });
        });