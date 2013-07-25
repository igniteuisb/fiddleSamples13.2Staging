$(function () {
            /*----------------- Instantiation -------------------------*/
            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                width: "100%",
                height: "70px",
                ranges: [
                   {
                       name: 'Raw',
                       startValue: 0,
                       endValue: 1,
                       brush: 'white'
                   },
                   {
                       name: 'Bleu',
                       startValue: 1,
                       endValue: 2,
                       brush: 'blue'
                   },                 
                   {
                       name: 'Rare',
                       startValue: 2,
                       endValue: 3,
                       brush: 'purple'

                   },
                   {
                       name: 'Medium rare',
                       startValue: 3,
                       endValue: 4,
                       brush: '#ff6a00'
                   },
                   {
                       name: 'Medium',
                       startValue: 4,
                       endValue: 5,
                       brush: '#BF6716',
                       innerStartExtent: 0.1,
                       innerEndExtent: 0.1,
                       outerStartExtent: 1,
                       outerEndExtent: 1,
                       strokeThickness: 2,
                       outline:'red'
                   },
                   {
                       name: 'Medium well',
                       startValue: 5,
                       endValue: 6,
                       brush: '#a75733'
                   },
                   {
                       name: 'Well done',
                       startValue: 6,
                       endValue: 7,
                       brush: '#823d2b'
                   },
                   {
                       name: 'Very well done',
                       startValue: 7,
                       endValue: 10,
                       brush: '#black'
                   },
                ],
                showToolTip: true,
                maximumValue: 10,
                targetValue: 4.8,
                targetValueBrush: 'white',
                targetValueOutline: 'red',
                actualValueOutline: 'red',
                actualValue: 4.5,
                actualValueBrush: 'white',
                formatLabel: function (evt, ui) {
                    if (ui.value==ui.actualMinimumValue) {
                        ui.label = ui.value + "\nMins/Side";
                    }                    
                },
                transitionDuration: 1000
            });

        });