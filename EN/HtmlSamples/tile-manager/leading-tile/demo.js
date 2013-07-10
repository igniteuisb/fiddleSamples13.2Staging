$(function () {
var activated = [false, false, false, false],
            options = {
                layoutConfiguration: {
                    gridLayout: {
                        columnWidth: 230,
                        columnHeight: 210,
                        marginLeft: 10,
                        marginTop: 10
                    },
                    items: [
                        { rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 },
                        { rowIndex: 0, colIndex: 2, rowSpan: 1, colSpan: 1 },
                        { rowIndex: 1, colIndex: 2, rowSpan: 1, colSpan: 1 },
                        { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 1 },
                        { rowIndex: 2, colIndex: 1, rowSpan: 1, colSpan: 1 },
                        { rowIndex: 2, colIndex: 2, rowSpan: 1, colSpan: 1 }
                    ]
                },
                maximizedTileIndex: 0,
                minimizedState: ':not(ul)'
            };
        $(function () {
            $('#car-tabs').tabs({
                beforeActivate: function (event, ui) {
                    var index = ui.newTab.index();
                    if (!activated[index]) {
                        ui.newPanel.igTileManager(options);
                        activated[index] = true;
                    }
                }
            });
            $('#mercedes').igTileManager(options);
            activated[0] = true;
        });
});