$(function () {
            $("#columnChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: lastFiveYears,
                title: "国別エネルギー生産量",
                subtitle: "総一次エネルギー生産国トップ 5 ",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Year",
                    title: "年"
                }, {
                    name: "yAxis",
                    type: "numericY",
                    title: "生産されたエネルギー (BTU 40 億単位)",
                }],
                series: [{
                    name: "series1",
                    title: "Canada",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Canada"
                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Saudi Arabia"
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia"
                },
                {
                    name: "series4",
                    title: "United States",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "United States"
                },
                {
                    name: "series5",
                    title: "China",
                    type: "column",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China"
                }]
            });

            $("#barChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: lastFiveYears,
                title: "国別エネルギー生産量",
                subtitle: "総一次エネルギー生産国トップ 5 ",
                legend: { element: "barLegend" },
                axes: [{
                    name: "xAxis",
                    type: "numericX",
                    title: "生産されたエネルギー (BTU 40 億単位)"
                }, {
                    name: "yAxis",
                    type: "categoryY",
                    label: "Year",
                    title: "年"
                }],
                series: [{
                    name: "series1",
                    title: "Canada",
                    type: "bar",
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Canada"
                }, {
                    name: "series2",
                    title: "Saudi Arabia",
                    type: "bar",
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Saudi Arabia"
                }, {
                    name: "series3",
                    title: "Russia",
                    type: "bar",
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Russia"
                }, {
                    name: "series4",
                    title: "United States",
                    type: "bar",
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "United States"
                }, {
                    name: "series5",
                    title: "China",
                    type: "bar",
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "China"
                }]
            });
        });