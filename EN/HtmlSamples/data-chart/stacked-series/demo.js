$(function () {
            function generateCategoryYChart(chartType) {

                var selector = "#" + chartType;

                $(selector).igDataChart({
                    dataSource: lastFiveYears,
                    height: "400px",
                    width: "400px",
                    title: "Energy Production Per Country",
                    subtitle: "The top five Total Primary Energy producers",
                    axes: [{
                        name: "Year",
                        type: "categoryY",
                        label: "Year",
                        title: "Year"
                    }, {
                        name: "Volume",
                        type: "numericX",
                        title: "Energy Produced (Quadrillion Btu)"
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
                            isTransitionInEnabled: true,
                            showTooltip: true,
                            tooltipTemplate: "China",
                            valueMemberPath: "China"
                        }, {
                            name: "United States",
                            title: "United States",
                            type: "stackedFragment",
                            isTransitionInEnabled: true,
                            showTooltip: true,
                            tooltipTemplate: "United States",
                            valueMemberPath: "United States"
                        }, {
                            name: "Russia",
                            title: "Russia",
                            showTooltip: true,
                            tooltipTemplate: "Russia",
                            type: "stackedFragment",
                            isTransitionInEnabled: true,
                            valueMemberPath: "Russia"
                        }, {
                            name: "Saudi Arabia",
                            title: "Saudi Arabia",
                            showTooltip: true,
                            tooltipTemplate: "Saudi Arabia",
                            type: "stackedFragment",
                            isTransitionInEnabled: true,
                            valueMemberPath: "Saudi Arabia"
                        }, {
                            name: "Canada",
                            title: "Canada",
                            showTooltip: true,
                            tooltipTemplate: "Canada",
                            type: "stackedFragment",
                            isTransitionInEnabled: true,
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
                    title: "Energy Production Per Country",
                    subTitle: "The top five Total Primary Energy producers",
                    axes: [{
                        name: "Year",
                        type: "categoryX",
                        label: "Year",
                        title: "Year"
                    },
                    {
                        name: "Volume",
                        type: "numericY",
                        title: "Energy Produced (Quadrillion Btu)"
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