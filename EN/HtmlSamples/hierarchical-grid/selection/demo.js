$(function () {

            $("#rowSelectorColumnWidthEditor").igNumericEditor(
                 {
                     width: 60,
                     minValue: 0,
                     maxValue: 60,
                     nullText: "default"
                 });

            /*----------------- Method & Option Examples -------------------------*/

            $("#applyRowSelectors").click(function (e) {
                $("#rowSelectorsGrid").igHierarchicalGrid("destroy");
                $("#rowSelectorsGrid").remove();
                createRowSelectorsGrid();
            });

            $("#applyCellSelection").click(function (e) {
                $("#cellSelectionGrid").igHierarchicalGrid("destroy");
                $("#cellSelectionGrid").remove();
                createCellSelectionGrid();
            });

            /*----------------- Instantiation -------------------------*/

            createCellSelectionGrid();
            createRowSelectorsGrid();
        });

        function createCellSelectionGrid() {
            var multipleSelection = $("#multipleCellSelection").is(":checked") ? true : false;
            var multipleCellSelectOnClick = $("#multipleCellSelectOnClick").is(":checked") ? true : false;
            var touchDragSelect = $("#touchDragSelect").is(":checked") ? true : false;

            $("<table id='cellSelectionGrid'></table>").appendTo(".cellSelectionContainer").igHierarchicalGrid({
                height: "95%",
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
                    ],
                columns: [
                  { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "5%" },
                  { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                  { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                  { key: "Title", headerText: "Title", dataType: "string", width: "20%" },
                  { headerText: "Address", key: "Address", dataType: "string", width: "25%" },
                  { headerText: "City", key: "City", dataType: "string", width: "10%" },
                  { headerText: "Postal Code", key: "PostalCode", dataType: "string", width: "10%", hidden: true },
                  { headerText: "Region", key: "Region", dataType: "string", width: "5%", hidden: true },
                  { headerText: "Country", key: "Country", dataType: "string", width: "15%", hidden: false },
                  { headerText: "Home Phone", key: "HomePhone", dataType: "string", width: "10%", hidden: true },
                  { headerText: "Extension", key: "Extension", dataType: "string", width: "10%", hidden: true }
                ],
                childrenDataProperty: "Orders",                
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        width: "100%",
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "5%" },
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
                        name: "Selection",
                        mode: "cell",
                        multipleSelection: multipleSelection,
                        touchDragSelect: touchDragSelect, // this is true by default
                        multipleCellSelectOnClick: multipleCellSelectOnClick
                    },
                    {
                        name: "Paging",
                        pageSize: 5,
                        type: "local",
                        inherit: true
                    }
                ]
            });
        }

        function createRowSelectorsGrid() {
            var rowNumbering = $("#enableRowNumberingchkb").is(":checked") ? true : false;
            var enableCheckboxes = $("#enableCheckboxeschkb").is(":checked") ? true : false;
            var selectorWidth = $("#rowSelectorColumnWidthEditor").igNumericEditor("option", "value");
            selectorWidth = typeof (selectorWidth) === "number" ? selectorWidth : null;

            var selectionMode = $('#selectionMode').val();
            var multipleSelection = $("#multipleSelection").is(":checked") ? true : false;

            $("<table id='rowSelectorsGrid'></table>").appendTo(".rowSelectorsContainer").igHierarchicalGrid({
                height: "95%",
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
                ],
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "5%" },
                   { key: "LastName", headerText: "Last Name", dataType: "string", width: "10%" },
                   { key: "FirstName", headerText: "First Name", dataType: "string", width: "10%" },
                   { key: "Title", headerText: "Title", dataType: "string", width: "15%" },
                   { headerText: "Address", key: "Address", dataType: "string", width: "25%" },
                   { headerText: "City", key: "City", dataType: "string", width: "10%" },
                   { headerText: "Postal Code", key: "PostalCode", dataType: "string", width: "10%", hidden: true },
                   { headerText: "Region", key: "Region", dataType: "string", width: "5%", hidden: true },
                   { headerText: "Country", key: "Country", dataType: "string", width: "10%", hidden: false },
                   { headerText: "Home Phone", key: "HomePhone", dataType: "string", width: "5%", hidden: true },
                   { headerText: "Extension", key: "Extension", dataType: "string", width: "5%", hidden: true }
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
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "5%" },
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
                        name: "RowSelectors",
                        inherit: true,
                        enableCheckBoxes: enableCheckboxes,
                        enableRowNumbering: rowNumbering,
                        rowSelectorColumnWidth: selectorWidth
                    },
                    {
                        name: "Selection",
                        mode: selectionMode,
                        multipleSelection: multipleSelection
                    },
                    {
                        name: "Paging",
                        pageSize: 5,
                        type: "local",
                        inherit: true
                    }
                ]
            });
        }