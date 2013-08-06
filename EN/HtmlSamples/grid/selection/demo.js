$(function () {
            createCellSelectionGrid();
            createRowSelectionGrid();
        });

        function createCellSelectionGrid() {
            $("#cellSelectionGrid").igGrid({
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "Employee ID", key: "ID", dataType: "number", width: "120px" },
                    { headerText: "Name", key: "Name", dataType: "string" },
                    { headerText: "Title", key: "Title", dataType: "string"},
                    { headerText: "Phone", key: "Phone", dataType: "string" }
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
                        name: "Selection",
                        mode: "cell",
                        multipleSelection: false,
                        touchDragSelect: false, // this is true by default
                        multipleCellSelectOnClick: false
                    }
                ]
            });
        }

        function createRowSelectionGrid() {
            $("#rowSelectionGrid").igGrid({
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "Employee ID", key: "ID", dataType: "number", width: "120px" },
                    { headerText: "Name", key: "Name", dataType: "string"},
                    { headerText: "Title", key: "Title", dataType: "string" },
                    { headerText: "Phone", key: "Phone", dataType: "string" }
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
                        name: "Selection",
                        mode: 'row',
                        multipleSelection: true
                    }
                ]
            });
        }