$(function () {
            function generateCategoryYChart(chartType) {

                var selector = "#" + chartType;

                $(selector).igDataChart({
                    dataSource: lastFiveYears,
                    height: "400px",
                    width: "400px",
                    title: "国別エネルギー生産量",
                    subTitle: "総一次エネルギー生産国トップ 5 ",
                    axes: [{
                        name: "Year",
                        type: "categoryY",
                        label: "Year",
                        title: "年"
                    }, {
                        name: "Volume",
                        type: "numericX",
                        title: "生産されたエネルギー (BTU 40 億単位)"
                    }],
                    series: [{
                        name: "parent",
                        type: chartType,
                        xAxis: "Volume",
                        yAxis: "Year",
                        series: [{
                            name: "China",
                            title: "China",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "China",
                            valueMemberPath: "China"
                        }, {
                            name: "United States",
                            title: "United States",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "United States",
                            valueMemberPath: "United States"
                        }, {
                            name: "Russia",
                            title: "Russia",
                            showTooltip: true,
                            tooltipTemplate: "Russia",
                            type: "stackedFragment",
                            valueMemberPath: "Russia"
                        }, {
                            name: "Saudi Arabia",
                            title: "Saudi Arabia",
                            showTooltip: true,
                            tooltipTemplate: "Saudi Arabia",
                            type: "stackedFragment",
                            valueMemberPath: "Saudi Arabia"
                        }, {
                            name: "Canada",
                            title: "Canada",
                            showTooltip: true,
                            tooltipTemplate: "Canada",
                            type: "stackedFragment",
                            valueMemberPath: "Canada"
                        }]
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function generateCategoryXChart(chartType) {

                var selector = "#" + chartType;

                $(selector).igDataChart({
                    dataSource: lastFiveYears,
                    height: "400px",
                    width: "400px",
                    title: "国別エネルギー生産量",
                    subTitle: "総一次エネルギー生産国トップ 5 ",
                    axes: [{
                        name: "Year",
                        type: "categoryX",
                        label: "Year",
                        title: "年"
                    },
                    {
                        name: "Volume",
                        type: "numericY",
                        title: "生産されたエネルギー (BTU 40 億単位)"
                    }],
                    series: [{
                        name: "parent",
                        xAxis: "Year",
                        yAxis: "Volume",
                        type: chartType,
                        series: [{
                            name: "China",
                            title: "China",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "China",
                            valueMemberPath: "China"
                        }, {
                            name: "United States",
                            title: "United States",
                            type: "stackedFragment",
                            showTooltip: true,
                            tooltipTemplate: "United States",
                            valueMemberPath: "United States"
                        }, {
                            name: "Russia",
                            title: "Russia",
                            showTooltip: true,
                            tooltipTemplate: "Russia",
                            type: "stackedFragment",
                            valueMemberPath: "Russia"
                        }, {
                            name: "Saudi Arabia",
                            title: "Saudi Arabia",
                            showTooltip: true,
                            tooltipTemplate: "Saudi Arabia",
                            type: "stackedFragment",
                            valueMemberPath: "Saudi Arabia"
                        }, {
                            name: "Canada",
                            title: "Canada",
                            showTooltip: true,
                            tooltipTemplate: "Canada",
                            type: "stackedFragment",
                            valueMemberPath: "Canada"
                        }]
                    }]
                });
            };

            generateCategoryYChart("stackedBar");
            generateCategoryYChart("stacked100Bar");
            generateCategoryXChart("stackedArea");
            generateCategoryXChart("stackedColumn");
            generateCategoryXChart("stackedLine");
            generateCategoryXChart("stackedSpline");
            generateCategoryXChart("stackedSplineArea");
            generateCategoryXChart("stacked100Area");
            generateCategoryXChart("stacked100Column");
            generateCategoryXChart("stacked100Line");
            generateCategoryXChart("stacked100Spline");
            generateCategoryXChart("stacked100SplineArea");
        });