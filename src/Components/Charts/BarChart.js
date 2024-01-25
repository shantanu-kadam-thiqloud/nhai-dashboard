// src/components/BarChart.js
import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const BarChart = ({ chartdata, name }) => {
  useEffect(() => {
    // Create the chart instance
    const chart = am4core.create("chartdiv", am4charts.XYChart3D);

    // Add data to the chart
    chart.data = chartdata;
    chart.logo.disabled = true;
    // Create X and Y axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Set X-axis labels to be horizontal
    categoryAxis.renderer.labels.template.rotation = 0;

    // Create series (3D columns)
    const series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
    series.name = name; //"Zone";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    // Reduce the space between bars by adjusting the columnSpacing
    categoryAxis.renderer.minGridDistance = 10;

    // Adjust X-axis label text size
    categoryAxis.renderer.labels.template.fontSize = 10;

    // Set a common base value for all bars
    series.baseValue = 100;

    series.columns.template.adapter.add("fill", (fill, target) => {
      return target.dataItem.dataContext.color;
    });

    // Adjust the width of the bars
    series.columns.template.width = am4core.percent(75); // Adjust this value as needed

    // Add a chart cursor (optional)
    chart.cursor = new am4charts.XYCursor();

    // Add legend (optional)
    //chart.legend = new am4charts.Legend();

    // Adjust the angle of the chart (optional)
    chart.angle = 30;

    // Rotate the chart (optional)
    chart.rotation = 0; // Adjust this value to control the rotation angle

    return () => {
      // Clean up the chart when the component unmounts
      chart.dispose();
    };
  }, [chartdata]);

  return <div id="chartdiv" className="barCss"></div>;
};

export default BarChart;
