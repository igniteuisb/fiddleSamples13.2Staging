$(function () {
            for (i = 0; i < everyThreeYears.length; i++) {
                everyThreeYears[i].Total = (everyThreeYears[i]["China"] + everyThreeYears[i]["UnitedStates"] + everyThreeYears[i]["Russia"]).toFixed(2);
            }

            $("#chart").igDataChart({
                dataSource: everyThreeYears,
                crosshairVisibility: Modernizr.touch ? "visible" : "collapsed",
                title: "国別エネルギー生産量",
                subTitle: "総一次エネルギー生産国トップ 3",
                axes: [{
                    type: "categoryX",
                    name: "xAxis",
                    label: "Year",
                    strokeThickness: 5,
                    title: "年"
                }, {
                    type: "numericY",
                    name: "prodPower",
                    minimumValue: 0,
                    maximumValue: 100,
                    strokeThickness: 5,
                    title: "生産されたエネルギー (BTU 40 億単位)"
                }, {
                    type: "numericY",
                    name: "totalPower",
                    minimumValue: 50,
                    maximumValue: 250,
                    labelLocation: "outsideRight",
                    title: "生産された総エネルギー (BTU 40 億単位)",
                }],
                series: [{
                    type: "column",
                    name: "China",
                    title: "中国",
                    xAxis: "xAxis",
                    yAxis: "prodPower",
                    valueMemberPath: "China",
                    showTooltip: true,
                    tooltipTemplate: "tooltipChina",
                    legend: { element: "legend" }
                }, {
                    type: "column",
                    name: "UnitedStates",
                    title: "アメリカ",
                    xAxis: "xAxis",
                    yAxis: "prodPower",
                    valueMemberPath: "UnitedStates",
                    showTooltip: true,
                    tooltipTemplate: "tooltipUS",
                    legend: { element: "legend" }
                }, {
                    type: "column",
                    name: "Russia",
                    title: "ロシア",
                    xAxis: "xAxis",
                    yAxis: "prodPower",
                    valueMemberPath: "Russia",
                    showTooltip: true,
                    tooltipTemplate: "tooltipRussia",
                    legend: { element: "legend" }
                }, {
                    type: "line",
                    name: "Total",
                    title: "総エネルギー",
                    xAxis: "xAxis",
                    yAxis: "totalPower",
                    valueMemberPath: "Total",
                    brush: "Orange",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTotal",
                    legend: { element: "legend2" }
                }],
                leftMargin: 5,
                topMargin: 15
            });
        });