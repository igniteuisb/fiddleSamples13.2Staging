$(function () {
            
            var $bulletGraph = $("#bulletgraph");

            $bulletGraph.igBulletGraph({
                width: "100%",
                height: "80px",
                transitionDuration: 500,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 5200
                    },
                    {
                        name: 'acceptable',
                        startValue: 5200,
                        endValue: 6400
                    },
                    {
                        name: 'good',
                        startValue: 6400,
                        endValue: 10000
                    }
                ],
                minimumValue: 0,
                maximumValue: 10000,

                actualValue: 6000,
                actualValueBrush: 'white',
                actualValueOutline: 'transparent',
                actualValueInnerExtent: 0.5,
                actualValueOuterExtent: 0.65,

                targetValue: 5550,
                targetValueBreadth: 4,
                targetValueStrokeThickness: 0,
                targetValueBrush: 'white',
                targetValueOutline: 'transparent'
            });


            var $bulletGraph2 = $("#bulletgraph2");

            $bulletGraph2.igBulletGraph({
                width: "100%",
                height: "80px",
                transitionDuration: 500,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 3400
                    },
                    {
                        name: 'acceptable',
                        startValue: 3400,
                        endValue: 4000
                    },
                    {
                        name: 'good',
                        startValue: 4000,
                        endValue: 10000
                    }
                ],
                minimumValue: 0,
                maximumValue: 10000,

                actualValue: 5000,
                actualValueBrush: 'white',
                actualValueOutline: 'transparent',
                actualValueInnerExtent: 0.5,
                actualValueOuterExtent: 0.65,

                targetValue: 4800,
                targetValueBreadth: 12,
                targetValueStrokeThickness: 0,
                targetValueBrush: 'white',
                targetValueOutline: 'transparent'
            });


            var $bulletGraph3 = $("#bulletgraph3");

            $bulletGraph3.igBulletGraph({
                width: "100%",
                height: "80px",
                transitionDuration: 500,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 254
                    },
                    {
                        name: 'acceptable',
                        startValue: 254,
                        endValue: 300
                    },
                    {
                        name: 'good',
                        startValue: 300,
                        endValue: 500
                    }
                ],
                minimumValue: 0,
                maximumValue: 500,

                actualValue: 350,
                actualValueBrush: 'white',
                actualValueOutline: 'transparent',
                actualValueInnerExtent: 0.35,
                actualValueOuterExtent: 0.8,

                targetValue: 300,
                targetValueBreadth: 4,
                targetValueStrokeThickness: 0,
                targetValueBrush: 'white',
                targetValueOutline: 'transparent'
            });


            var $bulletGraph4 = $("#bulletgraph4");

            $bulletGraph4.igBulletGraph({
                width: "100%",
                height: "80px",
                transitionDuration: 500,
                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 60
                    },
                    {
                        name: 'acceptable',
                        startValue: 60,
                        endValue: 70
                    },
                    {
                        name: 'good',
                        startValue: 70,
                        endValue: 100
                    }
                ],
                minimumValue: 0,
                maximumValue: 100,

                actualValue: 50,
                actualValueBrush: 'white',
                actualValueOutline: 'transparent', 

                targetValue: 73,
                targetValueBreadth: 4,
                targetValueStrokeThickness: 0,
                targetValueBrush: 'white',
                targetValueOutline: 'transparent',

                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "%";
                }
            });
            // Logic for property switches

            //// Minimum Value
            //$("#minimumValueSlider").slider({
            //    min: 0,
            //    max: 100,
            //    value: $bulletGraph.igBulletGraph("option", "minimumValue"),
            //    slide: function (event, ui) {
            //        $bulletGraph.igBulletGraph("option", "minimumValue", ui.value);
            //        $("#minimumValueLabel").text(ui.value);
            //    }
            //});

            //// Maximum Value
            //$("#maximumValueSlider").slider({
            //    min: 0,
            //    max: 100,
            //    value: $bulletGraph.igBulletGraph("option", "maximumValue"),
            //    slide: function (event, ui) {
            //        $bulletGraph.igBulletGraph("option", "maximumValue", ui.value);
            //        $("#maximumValueLabel").text(ui.value);
            //    }
            //});

            //// Actual Value
            //$("#actualValueSlider").slider({
            //    min: 0,
            //    max: 100,
            //    value: $bulletGraph.igBulletGraph("option", "actualValue"),
            //    slide: function (event, ui) {
            //        $bulletGraph.igBulletGraph("option", "actualValue", ui.value);
            //        $("#actualValueLabel").text(ui.value);
            //    }
            //});

            //// Actual Value Brush
            //$("#actualValueBrushSelect").change(function () {
            //    var value = $(this).val();
            //    $bulletGraph.igBulletGraph("option", "actualValueBrush", value);
            //});

            //// Actual Value Inner Extent
            //$("#actualValueInnerExtentSlider").slider({
            //    min: 0,
            //    max: 1,
            //    step: 0.01,
            //    value: $bulletGraph.igBulletGraph("option", "actualValueInnerExtent"),
            //    slide: function (event, ui) {
            //        $bulletGraph.igBulletGraph("option", "actualValueInnerExtent", ui.value);
            //        $("#actualValueInnerExtentLabel").text(ui.value);
            //    }
            //});

            //// Actual Value Outer Extent
            //$("#actualValueOuterExtentSlider").slider({
            //    min: 0,
            //    max: 1,
            //    step: 0.01,
            //    value: $bulletGraph.igBulletGraph("option", "actualValueOuterExtent"),
            //    slide: function (event, ui) {
            //        $bulletGraph.igBulletGraph("option", "actualValueOuterExtent", ui.value);
            //        $("#actualValueOuterExtentLabel").text(ui.value);
            //    }
            //});

            //// Target Value
            //$("#targetValueSlider").slider({
            //    min: 0,
            //    max: 100,
            //    value: $bulletGraph.igBulletGraph("option", "targetValue"),
            //    slide: function (event, ui) {
            //        $bulletGraph.igBulletGraph("option", "targetValue", ui.value);
            //        $("#targetValueLabel").text(ui.value);
            //    }
            //});

            //// Target Value
            //$("#targetValueBreadthSlider").slider({
            //    min: 0,
            //    max: 20,
            //    value: $bulletGraph.igBulletGraph("option", "targetValueBreadth"),
            //    slide: function (event, ui) {
            //        $bulletGraph.igBulletGraph("option", "targetValueBreadth", ui.value);
            //        $("#targetValueBreadthLabel").text(ui.value);
            //    }
            //});

            //// Target Value Brush
            //$("#targetValueBrushSelect").change(function () {
            //    var value = $(this).val();
            //    $bulletGraph.igBulletGraph("option", "targetValueBrush", value);
            //});
        });