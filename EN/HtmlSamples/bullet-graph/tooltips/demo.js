$(function () {            

            $("#bulletgraph_task3").igBulletGraph({
                height: "60px",
                width: "100%",
                showToolTip: true,
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
                valueName: "Task 3",
                valueBrush: 'green',
                value: 85,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                transitionDuration: 500
            });

            $("#bulletgraph_task2").igBulletGraph({
                height: "60px",
                width: "100%",
                showToolTip: true,
                rangeToolTipTemplate: 'rangeToolTipTemplate2',
                valueToolTipTemplate: 'valueToolTipTemplate2',
                targetValueToolTipTemplate: 'targetValueToolTipTemplate2',
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
                valueName: "Task 2",
                valueBrush: 'orange',
                value: 96,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                transitionDuration: 500
            });

            $("#bulletgraph_task1").igBulletGraph({
                height: "60px",
                width: "100%",
                showToolTip: true,
                rangeToolTipTemplate: 'rangeToolTipTemplate1',
                valueToolTipTemplate: 'valueToolTipTemplate1',
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
                valueName: "Task 2",
                valueBrush: 'red',
                value: 74,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                transitionDuration: 500                
            });

            $("#bulletGraph_backLogItem").igBulletGraph({
                height: "300px",
                width: "100%",
                orientation: "vertical",                
                rangeToolTipTemplate: 'rangeToolTipTemplateNew',
                valueToolTipTemplate: 'valueToolTipTemplateNew',
                targetValueToolTipTemplate: 'targetValueToolTipTemplateNew',
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
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                }, 
                valueBrush: 'white',
                value: 83,
                targetValueBrush: 'white',
                targetValueOutline: 'white',
                targetValue: 90,
                labelInterval: 20,
                showToolTip: true,
                transitionDuration: 500
            });
        });