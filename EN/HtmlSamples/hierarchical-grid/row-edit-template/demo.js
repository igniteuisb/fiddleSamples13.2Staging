$(function () {
            /*----------------- Instantiation -------------------------*/
            $("#grid2").igHierarchicalGrid({
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
                            },
                            {
                                columnKey: 'PostalCode',
                                classes: 'hidden-phone'
                            },
                            {
                                columnKey: 'HomePhone',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {                       
                        name: "Updating",
                        enableAddRow: true,
                        inherit: true,
                        editMode: "rowedittemplate",
                        rowEditDialogContainment: "window",
                        showReadonlyEditors: false,
                        enableDeleteRow: true,
                        enableDataDirtyException: false,
                        rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                        rowEditDialogWidth: 600,
                        rowEditDialogHeight: 400,
                        columnSettings:
                            [{
                                columnKey: "EmployeeID",
                                readOnly: true
                            },
                            {
                                columnKey: "LastName",
                                validatorOptions: { bodyAsParent: false, required: true, showIcon: true }
                            }]
                    }
                ],
                width: "100%",
                height: "90%",
                initialDataBindDepth: -1,
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                autoGenerateColumns: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "5%" },
                    { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                    { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                    { key: "Title", headerText: "Title", dataType: "string", width: "10%" },
                    { headerText: "Address", key: "Address", dataType: "string", width: "15%" },
                    { headerText: "City", key: "City", dataType: "string", width: "10%" },
                    { headerText: "Postal Code", key: "PostalCode", dataType: "string", width: "10%", hidden: true },
                    { headerText: "Region", key: "Region", dataType: "string", width: "10%", hidden: true },
                    { headerText: "Country", key: "Country", dataType: "string", width: "10%", hidden: true },
                    { headerText: "Home Phone", key: "HomePhone", dataType: "string", width: "10%", hidden: true },
                    { headerText: "Extension", key: "Extension", dataType: "string", width: "10%", hidden: true }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,               
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        width: "100%",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "10%" },
                            { key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "10%", hidden: true },
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
                            },
                            {
                                name: "Updating",
                                enableAddRow: true,
                                rowEditDialogContainment: "owner",
                                editMode: "rowedittemplate",
                                showReadonlyEditors: false,
                                enableDeleteRow: true,
                                enableDataDirtyException: false,
                                rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                                rowEditDialogWidth: 600,
                                rowEditDialogHeight: 400,
                                columnSettings:
                                [
                                    {
                                        columnKey: "OrderID",
                                        readOnly: true
                                    },
                                    {
                                        columnKey: "ShipAddress",
                                        validatorOptions: { bodyAsParent: false, required: true, showIcon: true }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });