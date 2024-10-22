import { Component } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import { pasteSvg } from '../../assets/svgImages';

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
      hovertemplate:
        '%{pasteSvg}' +
        '<br><b>X:</b> %{x}<br>' + // X value
        '<b>Y:</b> %{y}<br>' + // Y value
        '<extra></extra>',
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

  pixelToDataRatio = 4000 / 800; // data units per pixel
  desiredPixels = 15;
  radius = (this.desiredPixels * this.pixelToDataRatio) / 2;

  lineLayout = {
    shapes: [
      {
        type: 'line',
        x0: 2110,
        y0: 0,
        x1: 2110,
        y1: 3,
        line: {
          color: 'black',
          width: 2,
        },
      },

      // Bottom circle
      {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        x0: 2105,
        y0: -0.05,
        x1: 2115,
        y1: 0.05,
        // fillcolor: 'black',
        line: {
          color: 'black',
        },
      },
      // Top circle
      {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        x0: 2105,
        y0: 2.95,
        x1: 2115,
        y1: 3.05,
        // fillcolor: 'black',
        line: {
          color: 'black',
        },
      },
    ],
    hoverlabel: {
      bgcolor: 'white',
      bordercolor: 'black',
      font: {
        family: 'Arial',
        size: 14,
        color: 'black',
      },
    },
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
    // modeBarButtonsToAdd: [
    //   {
    //     name: 'Reset Axes',
    //     icon: {
    //       width: 500,
    //       height: 500,
    //       // Custom SVG path for a refresh icon
    //       path: 'M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z',
    //       // SVG transform to fit the icon properly
    //       transform: 'scale(0.05)',
    //     },
    //     // click: function(gd) {
    //     //     Plotly.relayout(gd, {
    //     //         'xaxis.autorange': true,
    //     //         'yaxis.autorange': true
    //     //     });
    //     // }
    //   },
    // ],
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
