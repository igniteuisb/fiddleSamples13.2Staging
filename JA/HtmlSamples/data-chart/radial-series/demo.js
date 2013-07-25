$(function () {
            function createChart(selector, seriesType, data, hasLegend) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: data,
                    legend: hasLegend ? { element: "radialLegend" } : null,
                    title: "ニューヨーク市 vs. フィラデルフィア",
                    subTitle: "気温の比較",
                    axes: [{
                        name: "angleAxis",
                        type: "categoryAngle",
                        label: "Time",
                        interval: 1
                    }, {
                        name: "radiusAxis",
                        type: "numericRadius",
                        innerRadiusExtentScale: .1,
                        maximumValue: 95,
                        minimumValue: 75,
                        interval: 5,
                        radiusExtentScale: .6
                    }],
                    series: [{
                        name: "series1",
                        title: 'フィラデルフィア',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "PhiladelphiaTemp",
                        thickness: 5,
                        markerType: "circle"
                    }, {
                        name: "series2",
                        title: 'ニューヨーク市',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "NewYorkCityTemp",
                        thickness: 5,
                        markerType: "circle"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            createChart("#chartRadialLine", "radialLine", data, false);
            createChart("#chartRadialColumn", "radialColumn", data, false);
            createChart("#chartRadialPie", "radialPie", data, false);
            createChart("#chartRadialArea", "radialArea", data, true);
        });