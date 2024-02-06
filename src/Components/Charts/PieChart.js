import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const PieChart = ({ data, chartid }) => {
  useEffect(() => {
    // Create the chart
    let chart = am4core.create(chartid, am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // This creates an initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = data; // Use the data prop
    chart.legend.labels.template.fontSize = 10;
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'value';
    series.dataFields.category = 'category';
    series.slices.template.propertyFields.fill = 'color'; // Set slice colors
    series.labels.template.fontSize = 10;
    // Clean up the chart when the component unmounts

    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <div id={chartid} style={{ width: '100%', height: '300px' }}>
      {/* This div will be used by AmCharts to render the chart */}
    </div>
  );
};

export default PieChart;
