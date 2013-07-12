$(function () {
            /*----------------- Instantiation -------------------------*/
            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                height: "100px",
                width: "100%",
                interval: 15000,
                
                // Gets or sets the interval to use for rendering labels. This defaults to be the same interval as the tickmarks on the scale.
                labelInterval: 5000,
                // A value to start adding labels, added to the scale's MinimumValue.
                labelsPostInitial: 5000,
                // A value to stop adding labels, subtracted from the scale's MaximumValue.
                labelsPreTerminal: 4000,
                // Gets or sets the brush to use for the label font.
                fontBrush: "aqua",

                font: "20px Georgia",

                labelExtent: .4,

                formatLabel: function (evt, ui) {
                   // ui.label = ui.value + " K";
                    if (ui.value != 45000) {
                        var re = /000$/;
                        //s.replace(re, "");
                        ui.label = ui.label.replace(re, "K");
                    }
                },

                alignLabel: function (evt, ui) {
                    // center the just the number part according to its tick, instead of centering the whole label
                    if (ui.value == 45000) {
                        ui.offsetX += 20;
                    }
                },
                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 27000
                    },
                    {
                        name: 'range2',
                        startValue: 27000,
                        endValue: 29000
                    },
                    {
                        name: 'range3',
                        startValue: 29000,
                        endValue: 50000
                    }
                ],
                maximumValue: 50000,
                targetValue: 34000,
                actualValue: 38000,  
                transitionDuration: 1000
            });


           
        });