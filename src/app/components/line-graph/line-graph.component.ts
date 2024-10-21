import { Component } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';

@Component({
  selector: 'app-line-graph',
  standalone: true,
  imports: [PlotlyModule],
  templateUrl: './line-graph.component.html',
  styleUrl: './line-graph.component.css',
})
export class LineGraphComponent {
  lineData = [
    {
      x: [
        50.6, 100.3, 150.5, 300.2, 750.8, 1200.1, 1750.6, 1800.2, 2000.4,
        2250.3, 2600.8, 2700.9, 2900.7, 3200.5, 3300.4, 3400.1, 3450.9, 3500.0,
      ],
      y: [
        1, 1.5, 2, 1.5, 1.8, 2.5, 1.3, 2.8, 1, 1, 2.4, 2.8, 1, 1.7, 2.7, 2.9,
        1.5, 2,
      ].sort(),
      name: 'L total sum',
      type: 'scatter',
      line: { color: '#00bfff', dash: 'solid', shape: 'spline' },
      mode: 'lines',
    },
    {
      x: [
        50.6, 100.3, 150.5, 300.2, 750.8, 1200.1, 1750.6, 1800.2, 2000.4,
        2250.3, 2600.8, 2700.9, 2900.7, 3200.5, 3300.4, 3400.1, 3450.9, 3500.0,
      ],
      y: [
        1, 1.5, 2, 1.5, 1.8, 2.5, 1.3, 2.8, 1, 1, 2.4, 2.8, 1, 1.7, 2.7, 2.9,
        1.5, 2,
      ]
        .sort()
        .map((val) => val - 0.2),
      name: 'R total sum',
      type: 'scatter',
      line: { color: '#ffa500', dash: 'dashdot', shape: 'spline' },
      mode: 'lines',
    },
    {
      x: [
        50.6, 100.3, 150.5, 300.2, 750.8, 1200.1, 1750.6, 1800.2, 2000.4,
        2250.3, 2600.8, 2700.9, 2900.7, 3200.5, 3300.4, 3400.1, 3450.9, 3500.0,
      ],
      y: [
        1, 1.5, 2, 1.5, 1.8, 2.5, 1.3, 2.8, 1, 1, 2.4, 2.8, 1, 1.7, 2.7, 2.9,
        1.5, 2,
      ]
        .sort()
        .map((val) => val - 0.3),
      name: 'L total norm',
      type: 'scatter',
      line: { color: 'red', dash: 'dot', shape: 'spline' },
      mode: 'lines',
    },
    {
      x: [
        50.6, 100.3, 150.5, 300.2, 750.8, 1200.1, 1750.6, 1800.2, 2000.4,
        2250.3, 2600.8, 2700.9, 2900.7, 3200.5, 3300.4, 3400.1, 3450.9, 3500.0,
      ],
      y: [
        1, 1.5, 2, 1.5, 1.8, 2.5, 1.3, 2.8, 1, 1, 2.4, 2.8, 1, 1.7, 2.7, 2.9,
        1.5, 2,
      ]
        .sort()
        .map((val) => val - 0.4),
      name: 'R total norm',
      type: 'scatter',
      line: { color: 'green', dash: 'dash', shape: 'spline' },
      mode: 'lines',
    },
    {
      x: [
        50.6, 100.3, 150.5, 300.2, 750.8, 1200.1, 1750.6, 1800.2, 2000.4,
        2250.3, 2600.8, 2700.9, 2900.7, 3200.5, 3300.4, 3400.1, 3450.9, 3500.0,
      ],
      y: [
        1, 1.5, 2, 1.5, 1.8, 2.5, 1.3, 2.8, 1, 1, 2.4, 2.8, 1, 1.7, 2.7, 2.9,
        1.5, 2,
      ]
        .sort()
        .map((val) => val - 0.5),
      name: 'Total sum',
      type: 'scatter',
      line: { color: 'yellow', dash: 'solid', shape: 'spline' },
      mode: 'lines',
    },

    // Add more lines as needed
  ];

  lineLayout = {
    margin: {
      pad: 13,
    },
    title: {
      text: 'Sensor line graph',
      font: {
        size: 25,
        weight: 500,
      },
      xref: 'paper',
      x: 0, // Left align
    },
    xaxis: {
      range: [0, 3500],
      showline: false,
      zeroline: false,
      showgrid: false,
      color: 'grey',
      tickfont: {
        size: 13,
      },
    },
    yaxis: {
      range: [0, 3],
      showline: false,
      zeroline: true,
      zerolinecolor: '#D3D3D3',
      gridcolor: '#D3D3D3',
      gridwidth: 1,
      color: 'grey',
      tickfont: {
        size: 13,
      },
    },
    showlegend: true,
    responsive: true,
  };

  config = {
    modeBarButtonsToRemove: [
      'toImage', // Remove download plot button
      'zoom2d', // Remove zoom button
      'select2d', // Remove box select button
      'lasso2d', // Remove lasso button
      'autoScale2d', // Remove autoscale button
    ],
    displaylogo: false, // Optionally hide the Plotly logo
  };
}
