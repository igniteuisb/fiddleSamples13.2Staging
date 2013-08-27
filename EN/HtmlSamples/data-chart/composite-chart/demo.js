$(function () {
            for (i = 0; i < everyThreeYears.length; i++) {
                everyThreeYears[i].Total = (everyThreeYears[i]["China"] + everyThreeYears[i]["UnitedStates"] + everyThreeYears[i]["Russia"]).toFixed(2);
            }

            $("#chart").igDataChart({
                dataSource: everyThreeYears,
                width: "450px",
                height: "450px",
                crosshairVisibility: Modernizr.touch ? "visible" : "collapsed",
                title: "Energy Production Per Country",
                subTitle: "The top three Total Primary Energy producers",
                axes: [{
                    type: "categoryX",
                    name: "xAxis",
                    label: "Year",
                    strokeThickness: 5,
                    title: "Year"
                }, {
                    type: "numericY",
                    name: "prodPower",
                    minimumValue: 0,
                    maximumValue: 100,
                    strokeThickness: 5,
                    title: "Energy Produced (Quadrillion Btu)"
                }, {
                    type: "numericY",
                    name: "totalPower",
                    minimumValue: 50,
                    maximumValue: 250,
                    labelLocation: "outsideRight",
                    title: "Total Energy Produced (Quadrillion Btu)",
                }],
                series: [{
                    type: "column",
                    name: "China",
                    title: "China",
                    xAxis: "xAxis",
                    yAxis: "prodPower",
                    valueMemberPath: "China",
                    showTooltip: true,
                    tooltipTemplate: "tooltipChina",
                    legend: { element: "legend" }
                }, {
                    type: "column",
                    name: "UnitedStates",
                    title: "US",
                    xAxis: "xAxis",
                    yAxis: "prodPower",
                    valueMemberPath: "UnitedStates",
                    showTooltip: true,
                    tooltipTemplate: "tooltipUS",
                    legend: { element: "legend" }
                }, {
                    type: "column",
                    name: "Russia",
                    title: "Russia",
                    xAxis: "xAxis",
                    yAxis: "prodPower",
                    valueMemberPath: "Russia",
                    showTooltip: true,
                    tooltipTemplate: "tooltipRussia",
                    legend: { element: "legend" }
                }, {
                    type: "line",
                    name: "Total",
                    title: "Total Energy",
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