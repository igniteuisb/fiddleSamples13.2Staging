$(function () {
            $("#columnChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: lastFiveYears,
                title: "Energy Production Per Country",
                subTitle: "The top five Total Primary Energy producers",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Year",
                    title: "Year"
                }, {
                    name: "yAxis",
                    type: "numericY",
                    title: "Energy Produced (Quadrillion Btu)",
                }],
                series: [{
                    name: "series1",
                    title: "Canada",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Canada",
                    tooltipTemplate: "Canada",
                    showTooltip: true

                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Saudi Arabia",
                    tooltipTemplate: "Saudi Arabia",
                    showTooltip: true
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia",
                    tooltipTemplate: "Russia",
                    showTooltip: true
                },
                {
                    name: "series4",
                    title: "United States",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "United States",
                    tooltipTemplate: "United States",
                    showTooltip: true
                },
                {
                    name: "series5",
                    title: "China",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China",
                    tooltipTemplate: "China",
                    showTooltip: true
                }]
            });
        });