$(function () {
            $("#radialgauge").igRadialGauge({
                height: "500px",
                width: "100%",
            });

            var lastPointX = 0, lastPointY = 0, lastValue = 0, isDragging = false;
            // Start the needle drag only on a mousedown on the needle
            document.getElementById("radialgauge").addEventListener("mousedown", function (e) {
                isDragging = true;
            });

            // Drag the needle to the new point only if the point being dragged to is inside the needle
            document.getElementById("radialgauge").addEventListener("mousemove", function (e) {
                dragNeedle(e);
            });

            // Drag the needle to the final new point only if the point being dragged to is inside the needle
            document.getElementById("radialgauge").addEventListener("mouseup", function (e) {
                dragNeedle(e);
                isDragging = false;
            });

            // Function that performs the needle drag to the new point
            function dragNeedle(e) {
                if (!isDragging) {
                    return;
                }
                var pointX = e.pageX - $("#radialgauge").offset().left;
                var pointY = e.pageY - $("#radialgauge").offset().top;
                var value = $("#radialgauge").igRadialGauge("getValueForPoint", pointX, pointY);
                if (isNaN(value))
                    return;
                value = Math.max(Math.min(value, 100), 0);
                if (Math.abs(value - lastValue) > 50)
                    return;
                lastValue = value;

                var isClickPointValid = true;
                if (!isMobile())
                    isClickPointValid = $("#radialgauge").igRadialGauge("needleContainsPoint", pointX, pointY);
                if (isClickPointValid) {
                    lastPointX = pointX;
                    lastPointY = pointY;
                } else {
                    isClickPointValid = $("#radialgauge").igRadialGauge("needleContainsPoint", (pointX + 4 * lastPointX) / 5, (pointY + 4 * lastPointY) / 5);
                }
                if (isClickPointValid)
                    $("#radialgauge").igRadialGauge("option", "value", value);
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