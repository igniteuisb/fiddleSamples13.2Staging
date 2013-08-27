$(function () {
            /*----------------- Instantiation -------------------------*/
            createDefaultSelectorsGrid();
            createCboxSelectorsGrid();
            createRowNumberingGrid();
        });



        function createDefaultSelectorsGrid() {
            $("#defaultRowSelectors").igGrid({
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "社員 ID", key: "ID", dataType: "number", width: "120px" },
                    { headerText: "名前", key: "Name", dataType: "string" },
                    { headerText: "役職", key: "Title", dataType: "string"},
                    { headerText: "電話", key: "Phone", dataType: "string" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "RowSelectors",
                        enableRowNumbering: false,
                        rowSelectorColumnWidth: "50px"
                    },
                    {
                        name: "Selection"
                    }
                ]
            });
        }

        function createCboxSelectorsGrid() {
            $("#cbRowSelectors").igGrid({
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "社員 ID", key: "ID", dataType: "number", width: "120px" },
                    { headerText: "名前", key: "Name", dataType: "string"},
                    { headerText: "役職", key: "Title", dataType: "string" },
                    { headerText: "電話", key: "Phone", dataType: "string" }
                ],
                features: [
                    {
                        name: 'Responsive',
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "RowSelectors",
                        enableCheckBoxes: true,
                        enableRowNumbering: false,
                        rowSelectorColumnWidth: "50px"
                    },
                    {
                        name: "Selection"
                    }
                ]
            });
        }

        function createRowNumberingGrid() {
            $("#rowNumbering").igGrid({
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "社員 ID", key: "ID", dataType: "number", width: "120px" },
                    { headerText: "名前", key: "Name", dataType: "string" },
                    { headerText: "役職", key: "Title", dataType: "string" },
                    { headerText: "電話", key: "Phone", dataType: "string" }
                ],
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: 'ID',
                                classes: 'hidden-phone'
                            }
                        ]
                    },
                    {
                        name: "RowSelectors",
                        enableRowNumbering: true,
                        rowSelectorColumnWidth: "50px"
                    },
                    {
                        name: "Selection"
                    }
                ]
            });
        }