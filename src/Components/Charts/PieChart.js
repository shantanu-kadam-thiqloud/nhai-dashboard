import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const PieChart = ({ data, chartid }) => {
  useEffect(() => {
    // Create the chart
    let chart = am4core.create(chartid, am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // This creates an initial fade-in

    chart.legend = new am4charts.Legend();

    // Customize the legend position
    chart.legend.position = "bottom"; // You can change the position as needed (e.g., "top", "left", "right")

    // Customize the legend container size

    var markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;
    // markerTemplate.padding(0, 0, 0, 0);

    chart.legend.contentLayout = "horizontal";
    // chart.legend.padding(0, 0, 0, 0); // Adjust the padding as needed
    chart.logo.disabled = true;
    chart.data = data; // Use the data prop
    chart.legend.labels.template.fontSize = 12;
    chart.legend.valueLabels.template.fontSize = 12;

    chart.legend.valueLabels.template.align = "right";
    chart.legend.valueLabels.template.textAlign = "end";

    chart.legend.itemContainers.template.paddingTop = 3;
    chart.legend.itemContainers.template.paddingBottom = 3;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "category";

    series.slices.template.propertyFields.fill = "color"; // Set slice colors
    series.labels.template.fontSize = 0;
    series.labels.template.disabled = true;

    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <div id={chartid} className="barCss">
      {/* This div will be used by AmCharts to render the chart */}
    </div>
  );
};

export default PieChart;
