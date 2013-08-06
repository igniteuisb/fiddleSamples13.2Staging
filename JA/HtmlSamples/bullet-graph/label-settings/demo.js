$(function () {
            /*----------------- Instantiation -------------------------*/
            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                height: "100px",
                width: "100%",
                interval: 15000000,
                //// Gets or sets the interval to use for rendering labels. This defaults to be the same interval as the tickmarks on the scale.
                //labelInterval: 25000,
                //// A value to start adding labels, added to the scale's MinimumValue.
                //labelsPostInitial: 5000,
                //// A value to stop adding labels, subtracted from the scale's MaximumValue.
                //labelsPreTerminal: 4000,
                //// Gets or sets the brush to use for the label font.
                fontBrush: "164F6D",
                //labelExtent: .4,
                formatLabel: function (evt, ui) { 
                    if (ui.value != 90000000) {
                        var re = /000$/; 
                        ui.label = ui.label.replace(re, "K");
                    }
                },
                alignLabel: function (evt, ui) {
                    // center the just the number part according to its tick, instead of centering the whole label
                    if (ui.value == 90000000) {
                        ui.offsetX += 20;
                    }
                },
                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 45000000,
                        brush: '#164F6D'
                    },
                    {
                        name: 'range2',
                        startValue: 45000000,
                        endValue: 52000000,
                        brush: '#20789F'
                    },
                    {
                        name: 'range3',
                        startValue: 52000000,
                        endValue: 100000000,
                        brush: '#36A5D5'
                    }
                ],
                maximumValue: 100000000,
                targetValue: 45000000,
                targetValueBrush: 'white',
                actualValue: 48000000,
                transitionDuration: 500
            });

            var $bulletGraph2 = $("#bulletgraph2");

            $bulletGraph2.igBulletGraph({
                height: "100px",
                width: "100%",
                interval: 15000,
                // Gets or sets the interval to use for rendering labels. This defaults to be the same interval as the tickmarks on the scale.
                labelInterval: 25000,
                // A value to start adding labels, added to the scale's MinimumValue.
                labelsPostInitial: 5000,
                // A value to stop adding labels, subtracted from the scale's MaximumValue.
                labelsPreTerminal: 4000,
                //// Gets or sets the brush to use for the label font.
                //fontBrush: "aqua",
                font: "20px Georgia",
                fontBrush: "white",
                labelExtent: .4,
                formatLabel: function (evt, ui) { 
                    if (ui.value != 45000) {
                        var re = /000$/; 
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
                        endValue: 65000,
                        brush: '#5F5F5F'
                    },
                    {
                        name: 'range2',
                        startValue: 65000,
                        endValue: 68000,
                        brush: '#454545'
                    },
                    {
                        name: 'range3',
                        startValue: 68000,
                        endValue: 100000,
                        brush: '#969696'
                    }
                ],
                maximumValue: 100000,
                targetValue: 74000,
                targetValueBrush: 'white',
                actualValue: 78000,
                transitionDuration: 500
            });

            var $bulletGraph3 = $("#bulletgraph3");

            $bulletGraph3.igBulletGraph({
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
                fontBrush: "white",
                font: "20px Georgia",
                labelExtent: .35,
                formatLabel: function (evt, ui) { 
                    if (ui.value != 45000) {
                        var re = /000$/; 
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
                        endValue: 27000,
                        brush: '#BD2B35'
                    },
                    {
                        name: 'range2',
                        startValue: 27000,
                        endValue: 29000,
                        brush: '#E0474E'
                    },
                    {
                        name: 'range3',
                        startValue: 29000,
                        endValue: 50000,
                        brush: '#EC6166'
                    }
                ],
                maximumValue: 50000,
                targetValue: 34000,
                targetValueBrush: 'white',
                actualValue: 38000,
                transitionDuration: 500
            });
           
        });