$(function () {
            /*----------------- Instantiation -------------------------*/
            createDefaultSelectorsGrid();
            createCboxSelectorsGrid();
            createRowNumberingGrid();
        });

        function createDefaultSelectorsGrid()
        {
            $( "#defaultRowSelectors" ).igHierarchicalGrid( {
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                initialDataBindDepth: -1,
                loadOnDemand: false,
                responseDataKey: "results",
                dataSourceType: "json",
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
                ],
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "5%", hidden: true },
                   { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                   { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                   { key: "Title", headerText: "Title", dataType: "string", width: "15%" },
                   { headerText: "Address", key: "Address", dataType: "string", width: "25%" },
                   { headerText: "City", key: "City", dataType: "string", width: "10%" }
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
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "5%", hidden: true },
                            { key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "5%", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "15%" }
                        ]
                    }
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
                        name: "RowSelectors",
                        inherit: true,
                        enableRowNumbering: false,
                        rowSelectorColumnWidth: 50
                    },
                    {
                        name: "Selection"
                    },
                    {
                        name: "Paging",
                        pageSize: 5,
                        type: "local",
                        inherit: true
                    }
                ]
            } );
        }
        function createCboxSelectorsGrid()
        {
            $( "#cbRowSelectors" ).igHierarchicalGrid( {
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                initialDataBindDepth: -1,
                loadOnDemand: false,
                responseDataKey: "results",
                dataSourceType: "json",
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
                ],
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "5%", hidden: true },
                   { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                   { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                   { key: "Title", headerText: "Title", dataType: "string", width: "15%" },
                   { headerText: "Address", key: "Address", dataType: "string", width: "25%" },
                   { headerText: "City", key: "City", dataType: "string", width: "10%" }
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
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "5%", hidden: true },
                            { key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "5%", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "15%" }
                        ]
                    }
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
                        name: "RowSelectors",
                        inherit: true,
                        enableCheckBoxes: true,
                        enableRowNumbering: false,
                        rowSelectorColumnWidth: 50
                    },
                    {
                        name: "Selection",
                        mode: "row",
                        multipleSelection: true
                    },
                    {
                        name: "Paging",
                        pageSize: 5,
                        type: "local",
                        inherit: true
                    }
                ]
            } );
        }
        function createRowNumberingGrid()
        {
            $( "#rowNumbering" ).igHierarchicalGrid( {
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                initialDataBindDepth: -1,
                loadOnDemand: false,
                responseDataKey: "results",
                dataSourceType: "json",
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
                ],
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "5%", hidden: true },
                   { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                   { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                   { key: "Title", headerText: "Title", dataType: "string", width: "15%" },
                   { headerText: "Address", key: "Address", dataType: "string", width: "25%" },
                   { headerText: "City", key: "City", dataType: "string", width: "10%" }
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
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "5%", hidden: true },
                            { key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "5%", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "15%" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "15%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "15%" }
                        ]
                    }
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
                        name: "RowSelectors",
                        inherit: true,
                        enableRowNumbering: true,
                        rowSelectorColumnWidth: 50
                    },
                    {
                        name: "Selection",
                        mode: "row",
                        multipleSelection: true
                    },
                    {
                        name: "Paging",
                        pageSize: 5,
                        type: "local",
                        inherit: true
                    }
                ]
            } );
        }