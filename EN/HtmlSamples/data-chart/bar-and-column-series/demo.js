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
                    valueMemberPath: "Canada"
                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Saudi Arabia"
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia"
                },
                {
                    name: "series4",
                    title: "United States",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "United States"
                },
                {
                    name: "series5",
                    title: "China",
                    type: "column",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China"
                }]
            });

            $("#barChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: lastFiveYears,
                title: "Energy Production Per Country",
                subTitle: "The top five Total Primary Energy producers",
                legend: { element: "barLegend" },
                axes: [{
                    name: "xAxis",
                    type: "numericX",
                    title: "Energy Produced (Quadrillion Btu)"
                }, {
                    name: "yAxis",
                    type: "categoryY",
                    label: "Year",
                    title: "Year"
                }],
                series: [{
                    name: "series1",
                    title: "Canada",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Canada"
                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Saudi Arabia"
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia"
                }, {
                    name: "series4",
                    title: "United States",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "United States"
                }, {
                    name: "series5",
                    title: "China",
                    type: "bar",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China"
                }]
            });
        });