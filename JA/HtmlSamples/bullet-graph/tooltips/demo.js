$(function () {
            $("#bulletgraph_default").igBulletGraph({
                height: "60px",
                width: "100%",                
                showTooltip: true,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 14
                    },
                    {
                        name: 'acceptable',
                        startValue: 14,
                        endValue: 25
                    },
                    {
                        name: 'good',
                        startValue: 25,
                        endValue: 30
                    }],
                minimumValue: 0, 
                maximumValue: 30,
                actualValueName: 'progress',
                actualValue: 26,
                targetValue: 22,
                transitionDuration: 500
            });

            $("#bulletgraph_templated").igBulletGraph({
                height: "60px",
                width: "100%",
                showTooltip: true,
                rangeTooltipTemplate: 'rangeTooltipTemplate2',
                actualValueTooltipTemplate: 'actualValueTooltipTemplate2',
                targetValueTooltipTemplate: 'targetValueTooltipTemplate2',
                ranges: [
                    {
                        brush: 'rgba(251, 23, 65, 0.57)',
                        name: 'Increment 1',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        brush: '#f8fe76',
                        name: 'Increment 2',
                        startValue: 50,
                        endValue: 80
                    },
                    {
                        brush: 'b2ff6f',
                        name: 'Increment 3',
                        startValue: 80,
                        endValue: 100
                    }
                ],
                actualValues: [
                   {
                       brush: 'red',
                       name: 'Steve',
                       startValue: 10,
                       value: 37
                   },
                   {
                       brush: 'orange',
                       name: 'Jim',
                       startValue: 37,
                       value: 66
                   },
                   {
                       brush: 'green',
                       name: 'Bob',
                       startValue: 66,
                       value: 83
                   }
                ],
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                },
                targetValue: 90,
                labelInterval: 20,
                actualValue: 20, 
                actualValueName: "Research/Preparation",
                transitionDuration: 500
            });

            $("#bulletgraph_semiTemplated").igBulletGraph({
                height: "200px",
                width: "100%",
                orientation: "vertical",
                showTooltip: true,
                rangeTooltipTemplate: 'rangeTooltipTemplate1',
                actualValueTooltipTemplate: 'actualValueTooltipTemplate1',
                targetValueTooltipTemplate: 'targetValueTooltipTemplate1',
                ranges: [
                    {

                        name: 'bad',
                        startValue: 0,
                        endValue: 50
                    },
                    {

                        name: 'acceptable',
                        startValue: 50,
                        endValue: 80
                    },
                    {

                        name: 'good',
                        startValue: 80,
                        endValue: 100
                    }
                ],
                actualValueName: 'progress',
                actualValue: 85,
                targetValue: 77,
                interval: 10,
                transitionDuration: 500
            });
        });