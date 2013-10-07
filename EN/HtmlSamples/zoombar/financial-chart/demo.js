$(function () {
$(document).ready(function () {
			var chart = $("#chart"),
				zoombar = $("#zoom"),
				popoverLeft = $("#popoverLeft"),
				popoverRight = $("#popoverRight"),
				popoverTimeout = 0,
				lastTarget,
				currentlyDragged,
				zoomParams;
			chart.igDataChart({
				width: "100%",
				height: "300px",
				axes: [
					{
						name: "xAxis",
						type: "categoryDateTimeX",
						dataSource: financialData1,
						dateTimeMemberPath: "Date",
						labelVisibility: "visible"
					},
					{
						name: "yAxis",
						type: "numericY"
					}
				],
				series: [
					{
						name: "series1",
						dataSource: financialData1,
						title: "Price Series",
						type: "financial",
						isTransitionInEnabled: true,
						displayType: "ohlc",
						xAxis: "xAxis",
						yAxis: "yAxis",
						openMemberPath: "Open",
						highMemberPath: "High",
						lowMemberPath: "Low",
						showTooltip: true,
						tooltipTemplate: "tooltipTemplate",
						closeMemberPath: "Close",
						thickness: 2,
						trendLineBrush: "rgba(68, 172, 214, .8)",
						trendLineThickness: 5,
						trendLineType: "exponentialAverage",
						negativeBrush: "rgba(198, 45, 54, .8)"
					},
					{
						name: "series2",
						dataSource: financialData2,
						title: "Price Series",
						type: "financial",
						isTransitionInEnabled: true,
						xAxis: "xAxis",
						yAxis: "yAxis",
						openMemberPath: "Open",
						highMemberPath: "High",
						lowMemberPath: "Low",
						closeMemberPath: "Close",
						thickness: 2,
						showTooltip: true,
						tooltipTemplate: "tooltipTemplate",
						trendLineBrush: "rgba(73, 73, 73, .8)",
						trendLineThickness: 5,
						trendLineType: "exponentialAverage",
						negativeBrush: "rgba(198, 45, 54, .8)",
						displayType: "ohlc"
					}
				],
				horizontalZoomable: true,
				verticalZoomable: false,
				windowResponse: "immediate",
				refreshCompleted: function (e, ui) {
					var viewport = chart.igDataChart("option", "gridAreaRect"),
						leftMostValue = chart.igDataChart("unscaleValue", "xAxis", viewport.left),
						rightMostValue = $("#chart").igDataChart("unscaleValue", "xAxis", viewport.left + viewport.width);
					// get the dates corresponding to the values
					leftMostValue = new Date(leftMostValue);
					rightMostValue = new Date(rightMostValue);
					// set the dates to the popover
					if (popoverLeft.data("igPopover")) {
						popoverLeft.igPopover("setContent", $.ig.formatter(leftMostValue, "date", "date"));
					}
					if (popoverRight.data("igPopover")) {
						popoverRight.igPopover("setContent", $.ig.formatter(rightMostValue, "date", "date"));
					}
					zoomParams = {
						left: ui.chart.actualWindowRect ? ui.chart.actualWindowRect.left : 35,
						width: ui.chart.actualWindowRect ? ui.chart.actualWindowRect.width : 30
					};
				}
			});
			$("#zoom").igZoombar({
				target: "#chart",
				windowResized: function (evt, ui) {
					var target = $(evt.originalEvent.target),
						handle = target.hasClass("ui-igzoombar-window-handle") ?
						target : lastTarget,
						popover = handle.attr("id").indexOf("left") > 0 ?
						popoverLeft : popoverRight,
						popoverContainer = $("#" + popover.attr("id") + "_popover");
					if (target.hasClass("ui-igzoombar-window-handle")) {
						lastTarget = target;
					}
					if (currentlyDragged && popover !== currentlyDragged) {
						currentlyDragged.igPopover("hide");
					}
					// show the popover if it's not already visible
					if (!popoverContainer.is(":visible")) {
						popover.igPopover("show");
					}
					// update popovers position
					popoverContainer.css({
						left: handle.offset().left -
							popoverContainer.outerWidth() / 2 + 5
					});
					currentlyDragged = popover;
					if (popoverTimeout > 0) {
						clearTimeout(popoverTimeout);
					}
					popoverTimeout = setTimeout(function () {
						popoverLeft.igPopover("hide");
						popoverRight.igPopover("hide");
						popoverTimeout = 0;
					}, 2000);
					// finally reset the buttonset
					$("#buttonset input").removeAttr("checked");               
					$("#buttonset").buttonset("refresh");
				}
			});
			$("#buttonset").buttonset().click(function (evt) {
				var target = $(evt.target),
					button,
					viewport = chart.igDataChart("option", "gridAreaRect"),
					leftMostValue = chart.igDataChart("unscaleValue", "xAxis", viewport.left),
					newWidth;
				if (!target.is("input")) {
					return;
				}
				button = target.attr("id");
				if (button === "day") {
					newWidth = 24 * 60 * 60 * 1000;
				} else if (button === "week") {
					newWidth = 7 * 24 * 60 * 60 * 1000;
				} else if (button === "month") {
					newWidth = 30 * 24 * 60 * 60 * 1000;
				}
				newWidth = chart.igDataChart("scaleValue", "xAxis", new Date(leftMostValue + newWidth));
				zoombar.igZoombar("zoom", zoomParams.left * 100, (newWidth * zoomParams.width / viewport.width) * 100);
			});
			$("#popoverLeft").igPopover({
				target: $("#zoom_zoombar_mask_left_handle"),
				direction: "top",
				renderCloseButton: false,
				showOn: "focus"
			});
			$("#popoverRight").igPopover({
				target: $("#zoom_zoombar_mask_right_handle"),
				direction: "top",
				renderCloseButton: false,
				showOn: "focus"
			});
		});
});