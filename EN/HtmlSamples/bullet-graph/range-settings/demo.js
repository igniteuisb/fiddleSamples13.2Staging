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

                showTooltip: true,
                maximumValue: 10,
                targetValue: 4.8,
                targetValueBrush: 'white',
                targetValueOutline: 'red',
                actualValueOutline: 'red',
                actualValue: 4.5,
                actualValueBrush: 'white',
                formatLabel: function (evt, ui) {
                    if (ui.value==ui.actualMinimumValue) {
                        ui.label = ui.value + " Min/Side";
                    }                    
                },
                transitionDuration: 1000
        });


            //// Start Value
            //$("#startValueSlider").slider({
            //    min: 0,
            //    max: 100,
            //    value: range.startValue, //$bulletGraph.igBulletGraph("option", "range"),
            //    slide: function (event, ui) {
            //        range.startValue = ui.value;
            //        $bulletGraph.igBulletGraph("option", "ranges", [range]);
            //        $("#startValueLabel").text(ui.value);
            //    }
            //});

            //// End Value
            //$("#endValueSlider").slider({
            //    min: 0,
            //    max: 100,
            //    value: range.endValue, //$bulletGraph.igBulletGraph("option", "range"),
            //    slide: function (event, ui) {
            //        range.endValue = ui.value;
            //        $bulletGraph.igBulletGraph("option", "ranges", [range]);
            //        $("#endValueLabel").text(ui.value);
            //    }
            //});

            //// Inner Start Extent
            //$("#innerStartExtentSlider").slider({
            //    min: 0,
            //    max: 1,
            //    step: 0.01,
            //    value: range.innerStartExtent, //$bulletGraph.igBulletGraph("option", "range"),
            //    slide: function (event, ui) {
            //        range.innerStartExtent = ui.value;
            //        $bulletGraph.igBulletGraph("option", "ranges", [range]);
            //        $("#innerStartExtentLabel").text(ui.value);
            //    }
            //});

            //// Outer Start Extent
            //$("#outerStartExtentSlider").slider({
            //    min: 0,
            //    max: 1,
            //    step: 0.01,
            //    value: range.outerStartExtent, //$bulletGraph.igBulletGraph("option", "range"),
            //    slide: function (event, ui) {
            //        range.outerStartExtent = ui.value;
            //        $bulletGraph.igBulletGraph("option", "ranges", [range]);
            //        $("#outerStartExtentLabel").text(ui.value);
            //    }
            //});

            //// Inner End Extent
            //$("#innerEndExtentSlider").slider({
            //    min: 0,
            //    max: 1,
            //    step: 0.01,
            //    value: range.innerEndExtent, //$bulletGraph.igBulletGraph("option", "range"),
            //    slide: function (event, ui) {
            //        range.innerEndExtent = ui.value;
            //        $bulletGraph.igBulletGraph("option", "ranges", [range]);
            //        $("#innerEndExtentLabel").text(ui.value);
            //    }
            //});

            //// Outer End Extent
            //$("#outerEndExtentSlider").slider({
            //    min: 0,
            //    max: 1,
            //    step: 0.01,
            //    value: range.outerEndExtent, //$bulletGraph.igBulletGraph("option", "range"),
            //    slide: function (event, ui) {
            //        range.outerEndExtent = ui.value;
            //        $bulletGraph.igBulletGraph("option", "ranges", [range]);
            //        $("#outerEndExtentLabel").text(ui.value);
            //    }
            //});

            //// Outer End Extent
            //$("#strokeThicknessSlider").slider({
            //    min: 0,
            //    max: 10,
            //    value: range.strokeThickness, //$bulletGraph.igBulletGraph("option", "range"),
            //    slide: function (event, ui) {
            //        range.strokeThickness = ui.value;
            //        $bulletGraph.igBulletGraph("option", "ranges", [range]);
            //        $("#strokeThicknessLabel").text(ui.value);
            //    }
            //});

            //// Brush
            //$("#brushSelect").change(function () {
            //    range.brush = $(this).val();;
            //    $bulletGraph.igBulletGraph("option", "ranges", [range]);
            //});

            //// Outline
            //$("#outlineSelect").change(function () {
            //    range.outline = $(this).val();;
            //    $bulletGraph.igBulletGraph("option", "ranges", [range]);
            //});
        });