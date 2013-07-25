$(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                columns: [
                    { headerText: "Employee ID", key: "EmployeeID", dataType: "number" },
                    { headerText: "First Name", key: "FirstName", dataType: "string" },
                    { headerText: "Last Name", key: "LastName", dataType: "string" },
                    { headerText: "Birth Date", key: "BirthDate", dataType: "date" },
                    { headerText: "City", key: "City", dataType: "string" },
                    { headerText: "Postal Code", key: "PostalCode", dataType: "number" }
                ],
                dataSource: northwind,
                responseDataKey: 'results',
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
                                columnKey: 'PostalCode',
                                classes: 'hidden-phone'
                            }                            
                        ]
                    },
                    {
                        name: 'Filtering',
                        type: "local",
                        mode: "advanced"
                    }
                ]
            });
        });