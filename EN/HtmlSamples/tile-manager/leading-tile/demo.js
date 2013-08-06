$(function () {
var activated = [false, false, false, false],
            optionsWide = {
                layoutConfiguration: {
                    gridLayout: {
                        columnWidth: 210,
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
            },
            optionsPhone = {
                layoutConfiguration: {
                    gridLayout: {
                        columnWidth: 160,
                        columnHeight: 160,
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
            },
            wide;
        $(function () {
            $('#car-tabs').tabs({
                activate: function (event, ui) {
                    var index = ui.newTab.index();
                    if (!activated[index]) {
                        if ($(window).width() > 430) {
                            ui.newPanel.igTileManager(optionsWide);
                        } else {
                            ui.newPanel.igTileManager(optionsPhone);
                        }
                        activated[index] = true;
                    }
                }
            });
            if ($(window).width() > 430) {
                $('#mercedes').igTileManager(optionsWide);
                wide = true;
            } else {
                $('#mercedes').igTileManager(optionsPhone);
                wide = false;
            }
            activated[0] = true;
            $(window).on('resize', function (event) {
                if ($(window).width() <= 430 && wide) {
                    wide = false;
                    $('.dashboard').each(function (index, element) {
                        if (activated[index]) {
                            $(this).igTileManager('option', 'layoutConfiguration', optionsPhone.layoutConfiguration);
                        }
                    });
                } else if ($(window).width() > 430 && !wide) {
                    wide = true;
                    $('.dashboard').each(function (index, element) {
                        if (activated[index]) {
                            $(this).igTileManager('option', 'layoutConfiguration', optionsWide.layoutConfiguration);
                        }
                    });
                }
            });
        });
});