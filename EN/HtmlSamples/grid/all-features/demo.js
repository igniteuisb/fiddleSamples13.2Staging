$(function () {
            $("#grid").igGrid({
                primaryKey: "EmployeeID",
                height: '700px',
                width: '100%',
                columns: [
                    { headerText: "Employee ID", key: "EmployeeID", dataType: "number", width: "15%" },
                    {
                        headerText: "Employee Names",
                        group: [
                        { headerText: "First Name", key: "FirstName", dataType: "string", width: "20%" },
                        { headerText: "Last Name", key: "LastName", dataType: "string", width: "20%"},
                        { headerText: "Title", key: "Title", dataType: "string", width: "35%" }
                    ]
                    }
                ],
                autofitLastColumn: false,
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                features: [                    
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 5
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    },
                    {
                        name: "Selection"
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        filterDropDownItemIcons: false,
                        filterDropDownWidth: 200
                    },
                    {
                        name: "Updating",
                        enableDataDirtyException: false
                    },
                    {
                        name: "Tooltips"
                    },
                    {
                        name: "RowSelectors",
                        enableCheckBoxes: Modernizr.touch,
                        rowSelectorColumnWidth: "10%"
                    },
                    {
                        name: "Resizing"
                    },
                    {
                        name: "Summaries"
                    },
                    {
                        name: "Hiding"
                    },
                    {
                        name: "GroupBy"
                    },
                    {
                        name: "MultiColumnHeaders"
                    },
                    {
                        name: "ColumnMoving"
                    },
                    {
                        name: "CellMerging",
                        initialState: "merged"
                    }
                ]
            });
        });