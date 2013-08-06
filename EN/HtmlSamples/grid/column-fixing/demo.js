$(function () {

            /*----------------- Instantiation -------------------------*/
            createGrid();
        });

        function createGrid() {           

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