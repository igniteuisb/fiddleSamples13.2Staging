$(function () {
var data = [
            { Budget: 30, Department: "事務" },
            { Budget: 50, Department: "セールス" },
            { Budget: 60, Department: "IT" },
            { Budget: 50, Department: "マーケティング" },
            { Budget: 100, Department: "開発" },
            { Budget: 20, Department: "サポート" }
        ];

        $(function () {
            //  Create a regular funnel chart: It is styled according to the CSS in the infragistics.theme.css
            //  The styles are redefined later in the <style> node of the page
            $("#chartCSS").igFunnelChart({
                width: "100%",
                height: "430px",
                dataSource: data,
					 tooltipTemplate: "${Department}: ${Budget}",
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                outerLabelVisibility: "visible"
            });
            //  Create a funnel chart with brushes and outlines options set with specific colors
            $("#chartOptions").igFunnelChart({
                width: "100%",
                height: "430px",
                dataSource: data,
					 tooltipTemplate: "${Department}: ${Budget}",
                outlineThickness: 3,
                bottomEdgeWidth: 0.25,
                outerLabelAlignment: "right",
                brushes: ["#7DC3D9", "#3e5354", "#9EB5B4", "#5DD1C6", "#AFD1CE", "#2B768E"],
                outlines: [ "#3189A6", "#212D2E", "#5C7877", "#2FA498", "#487D78", "#163F4B" ],
                valueMemberPath: "Budget",
                innerLabelMemberPath: "Budget",
                innerLabelVisibility: "visible",
                outerLabelMemberPath: "Department",
                formatOuterLabel: function (value, index, funnelChart) {
                    return (value && value.length > 5) ? value.substring(0, 3) + "..." : value;
					 },
                formatInnerLabel: function (value, index, funnelChart) {
                    var elem = funnelChart.element, width = elem ? elem[0].offsetWidth : 500, item = "Item ";
                    if (value < 25 || width < 120 || (width < 150 && value < 55))
                        return value;
                    if (width < 180 || value < 40 || (width < 300 && value < 50))
                        item = "#";
						  return item + (index + 1) + " [" + value + "]";
					 },
                outerLabelVisibility: "visible"
            });
        });
});