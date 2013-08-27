$(function () {
            $("#lineargauge").igLinearGauge({
                height: "100px",
                width: "100%",
                minimumValue: 0,
                maximumValue: 10, 
                value: 1,
                needleBrush: "white",
                needleOutline: "#2582a9",
                labelExtent: 0.6,
                tickEndExtent: 0.8,
                tickStartExtent: 0.75,
                tinorTickStartExtent: 0.78,
                tinorTickEndExtent: 0.75,
                ranges: [
                   {
                       name: 'first',
                       startValue: 0,
                       endValue: 3,
                       outerStartExtent: .55,
                       outerEndExtent: .5
                   },
                   {
                       name: 'second',
                       startValue: 3,
                       endValue: 7,
                       outerStartExtent: .5,
                       outerEndExtent: .4
                   },
                   {
                       name: 'third',
                       startValue: 7,
                       endValue: 10,
                       outerStartExtent: .4,
                       outerEndExtent: .3
                   }
                ], 
            });

            var lastPointX = 0, lastPointY = 0, lastValue = 0, isDragging = false;
            // Start the needle drag only on a mousedown on the needle
            document.getElementById("lineargauge").addEventListener("mousedown", function (e) {
                isDragging = true;
            });

            // Drag the needle to the new point only if the point being dragged to is inside the needle
            document.getElementById("lineargauge").addEventListener("mousemove", function (e) {
                dragNeedle(e);
            });

            // Drag the needle to the final new point only if the point being dragged to is inside the needle
            document.getElementById("lineargauge").addEventListener("mouseup", function (e) {
                dragNeedle(e);
                isDragging = false;
            });

            // Function that performs the needle drag to the new point
            function dragNeedle(e) {
                if (!isDragging) {
                    return;
                }
                var pointX = e.pageX - $("#lineargauge").offset().left;
                var pointY = e.pageY - $("#lineargauge").offset().top;
                var value = $("#lineargauge").igLinearGauge("getValueForPoint", pointX, pointY);
                if (isNaN(value))
                    return;
                value = Math.max(Math.min(value, 10), 0);
                if (Math.abs(value - lastValue) > 50)
                    return;
                lastValue = value;

                var isClickPointValid = true;
                if (!isMobile())
                    isClickPointValid = $("#lineargauge").igLinearGauge("needleContainsPoint", pointX, pointY);
                if (isClickPointValid) {
                    lastPointX = pointX;
                    lastPointY = pointY;
                } else {
                    isClickPointValid = $("#lineargauge").igLinearGauge("needleContainsPoint", (pointX + 4 * lastPointX) / 5, (pointY + 4 * lastPointY) / 5);
                }
                if (isClickPointValid)
                    $("#lineargauge").igLinearGauge("option", "value", value);
            }

            // Check if the sample is being used in the following mobile devices
            function isMobile() {
                return navigator.userAgent.match(/Android/i) ||
						navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
						navigator.userAgent.match(/IEMobile/i) ||
						navigator.userAgent.match(/BlackBerry/i) ||
						navigator.userAgent.match(/Opera Mini/i) ||
						navigator.userAgent.match(/webOS/i) ||
						navigator.userAgent.match(/Windows Phone/i) ||
						navigator.userAgent.match(/ZuneWP7/i) ? true : false;
            }
        });