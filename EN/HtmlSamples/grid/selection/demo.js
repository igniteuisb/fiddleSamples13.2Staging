$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            $("#rowSelectorColumnWidthEditor").igNumericEditor(
                 {
                     width: 60,
                     minValue: 0,
                     maxValue: 60,
                     nullText: "default"
                 });

            /*----------------- Method & Option Examples -------------------------*/

            $("#applyRowSelectors").click(function (e) {
                $("#rowSelectorsGrid").igGrid("destroy");
                createRowSelectorsGrid();
            });

            $("#applyCellSelection").click(function (e) {
                $("#cellSelectionGrid").igGrid("destroy");
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

            $("#cellSelectionGrid").igGrid({
                height: "350px",
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "Employee ID", key: "ID", dataType: "number", width: "100px" },
                    { headerText: "Name", key: "Name", dataType: "string" },
                    { headerText: "Title", key: "Title", dataType: "string"},
                    { headerText: "Image", key: "ImageUrl", dataType: "object", template: "<img width='100' height='85' src='${ImageUrl}'></img>" },
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
                        multipleSelection: multipleSelection,
                        touchDragSelect: touchDragSelect, // this is true by default
                        multipleCellSelectOnClick: multipleCellSelectOnClick
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
  
            $("#rowSelectorsGrid").igGrid({
                height: "350px",
                width: "98%",
                autoGenerateColumns: false,
                dataSource: northwindEmployees,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                    { headerText: "Employee ID", key: "ID", dataType: "number" },
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
                        name: "RowSelectors",
                        enableCheckBoxes: enableCheckboxes,
                        enableRowNumbering: rowNumbering,
                        rowSelectorColumnWidth: selectorWidth
                    },
                    {
                        name: "Selection",
                        mode: selectionMode,
                        multipleSelection: multipleSelection
                    }
                ]
            });
        }