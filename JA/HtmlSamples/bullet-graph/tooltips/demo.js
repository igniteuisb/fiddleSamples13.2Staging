$(function () {            

            $("#bulletgraph_task3").igBulletGraph({
                height: "60px",
                width: "100%",
                rangeToolTipTemplate: 'rangeToolTipTemplate1',
                actualValueToolTipTemplate: 'actualValueToolTipTemplate1',
                targetValueToolTipTemplate: 'targetValueToolTipTemplate1',
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
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                },
                actualValueName: "Research/Preparation",
                actualValueBrush: 'green',
                actualValue: 85,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                showToolTip: true,
                transitionDuration: 500
            });

            $("#bulletgraph_task2").igBulletGraph({
                height: "60px",
                width: "100%", 
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
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                },
                actualValueName: "Research/Preparation",
                actualValueBrush: 'orange',
                actualValue: 96,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                showToolTip: true,
                transitionDuration: 500
            });

            $("#bulletgraph_task1").igBulletGraph({
                height: "60px",
                width: "100%",
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
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                },
                actualValueName: "Research/Preparation",
                actualValueBrush: 'red',
                actualValue: 74,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                showToolTip: true,
                transitionDuration: 500
            });

            $("#bulletGraph_backLogItem").igBulletGraph({
                height: "300px",
                width: "100%",
                orientation: "vertical",                
                rangeToolTipTemplate: 'rangeToolTipTemplate2',
                actualValueToolTipTemplate: 'actualValueToolTipTemplate2',
                targetValueToolTipTemplate: 'targetValueToolTipTemplate2',
                ranges: [
                    {
                        brush: '#f55',
                        name: 'Task 1',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        brush: '#f8fe76',
                        name: 'Task 2',
                        startValue: 50,
                        endValue: 80
                    },
                    {
                        brush: 'b2ff6f',
                        name: 'Task 3',
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
                actualValueName: "Research/Preparation",
                actualValueBrush: 'white',
                actualValue: 20,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                showToolTip: true,
                transitionDuration: 500
            });
        });