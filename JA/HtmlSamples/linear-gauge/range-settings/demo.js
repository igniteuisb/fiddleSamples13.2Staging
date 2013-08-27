$(function () {
            /*----------------- Instantiation -------------------------*/
            var $linearGauge = $("#linearGauge");

            $linearGauge.igLinearGauge({
                width: "100%",
                height: "70px",
                ranges: [
                   {
                       name: 'Raw',
                       startValue: 0,
                       endValue: 1,
                       brush: 'white',
                       outline: 'white'
                   },
                   {
                       name: 'Bleu',
                       startValue: 1,
                       endValue: 2,
                       brush: 'blue',
                       outline: 'blue'
                   },
                   {
                       name: 'Rare',
                       startValue: 2,
                       endValue: 3,
                       brush: 'purple',
                       outline: 'purple'
                   },
                   {
                       name: 'Medium rare',
                       startValue: 3,
                       endValue: 4,
                       brush: '#ff6a00',
                       outline: '#ff6a00'
                   },
                   {
                       name: 'Medium',
                       startValue: 4,
                       endValue: 5,
                       brush: '#bf6716',
                       outline: '#bf6716',
                       innerStartExtent: 0,
                       innerEndExtent: 0,
                       outerStartExtent: .8,
                       outerEndExtent: .8,
                       strokeThickness: 2,
                   },
                   {
                       name: 'Medium well',
                       startValue: 5,
                       endValue: 6,
                       brush: '#a75733',
                       outline: '#a75733'
                   },
                   {
                       name: 'Well done',
                       startValue: 6,
                       endValue: 7,
                       brush: '#823d2b',
                       outline: '#823d2b'
                   },
                   {
                       name: 'Very well done',
                       startValue: 7,
                       endValue: 10,
                       brush: 'black',
                       outline: 'black'
                   },
                ],
                showToolTip: true,
                maximumValue: 10,

                valueOutline: 'white',
                value: 4.5,
                needleBrush: 'white',
                needleOutline: 'white',
                formatLabel: function (evt, ui) {
                    if (ui.value == ui.actualMinimumValue) {
                        ui.label = ui.value + "\n分/片面";
                    }
                },
                transitionDuration: 1000
            });

        });