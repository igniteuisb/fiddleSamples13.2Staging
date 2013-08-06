$(function () {
            $("#columnChart").igDataChart({
                width: "98%",
                height: "400px",
                dataSource: lastFiveYears,
                title: "国別エネルギー生産量",
                subTitle: "総一次エネルギー生産国トップ 5 ",
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