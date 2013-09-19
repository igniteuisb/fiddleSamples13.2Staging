$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                height: "400px",
                columns: [
                    { headerText: "Order ID", key: "OrderID", dataType: "number", width: "10%" },
                    { headerText: "Order Date", key: "OrderDate", dataType: "date", width: "10%" },
                    { headerText: "Ship Name", key: "ShipName", dataType: "string", width: "30%" },
                    { headerText: "Ship City", key: "ShipCity", dataType: "string", width: "15%" },
                    { headerText: "Customer Name", key: "CustomerName", dataType: "string", width: "20%" },
                    { headerText: "Customer City", key: "City", dataType: "string", width: "15%" }
                ],
                dataSource: northwindInvoices,
                features: [
                    {
                        name: 'GroupBy'
                    }
                ]
            });
        });