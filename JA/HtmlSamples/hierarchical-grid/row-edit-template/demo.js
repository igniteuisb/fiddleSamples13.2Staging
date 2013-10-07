$(function () {
            /*----------------- Instantiation -------------------------*/
            $("#grid2").igHierarchicalGrid({
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'Title',
                                classes: 'ui-hidden-phone'
                            },
                            {
                                columnKey: 'Address',
                                classes: 'ui-hidden-phone'
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
                        rowEditDialogWidth: 350,
                        rowEditDialogHeight: '400',
                        rowEditDialogContentHeight: 300,
                        rowEditDialogFieldWidth: 200,
                        rowEditDialogOkCancelButtonWidth: 110,
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
                autoCommit:true,
                initialDataBindDepth: -1,
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                autoGenerateColumns: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "15%" },
                    { key: "LastName", headerText: "名字", dataType: "string", width: "10%" },
                    { key: "FirstName", headerText: "名前", dataType: "string", width: "10%" },
                    { key: "Title", headerText: "役職", dataType: "string", width: "20%" },
                    { key: "Address", headerText: "住所", dataType: "string", width: "20%" },
                    { key: "City", headerText: "市", dataType: "string", width: "10%" }
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
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "10%", hidden: true },
                            { key: "CustomerID", headerText: "顧客 ID", dataType: "string", width: "10%", hidden: true },
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
                                        columnKey: 'ShipAddress',
                                        classes: 'ui-hidden-phone'
                                    },
                                    {
                                        columnKey: 'ShipName',
                                        classes: 'ui-hidden-phone'
                                    }
                                ]
                            },
                            {
                                name: "Paging",
                                pageSize: 10
                            },
                            {
                                name: "Updating",
                                enableAddRow: false,
                                rowEditDialogContainment: "owner",
                                editMode: "rowedittemplate",
                                showReadonlyEditors: false,
                                enableDeleteRow: true,
                                enableDataDirtyException: false,
                                rowEditDialogWidth: 350,
                                rowEditDialogHeight: '400',
                                rowEditDialogContentHeight: 300,
                                rowEditDialogFieldWidth: 200,
                                rowEditDialogOkCancelButtonWidth: 110,
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