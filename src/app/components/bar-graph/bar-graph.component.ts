import { Component } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';

@Component({
  selector: 'app-bar-graph',
  standalone: true,
  imports: [PlotlyModule],
  templateUrl: './bar-graph.component.html',
  styleUrl: './bar-graph.component.css',
})
export class BarGraphComponent {
  // Bar Graph Data
  barData = [
    {
      type: 'bar',
      x: [
        'l_0',
        'l_1',
        'l_2',
        'l_3',
        'l_4',
        'l_5',
        'l_6',
        'l_7',
        'l_8',
        'r_0',
        'r_1',
        'r_2',
        'r_3',
        'r_4',
        'r_5',
        'r_6',
        'r_7',
        'r_8',
      ],
      y: [
        75, 100, 130, 85, 75, 140, 80, 90, 100, 75, 100, 130, 85, 75, 140, 80,
        90, 100,
      ],
      marker: {
        color: [
          '#ffa500',
          '#ffa500',
          '#ffa500',
          '#ffa500',
          '#ffa500',
          '#ffa500',
          '#ffa500',
          '#ffa500',
          '#ffa500',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
        ],
      },

      hovertemplate: '<b>X:</b> %{x}<br><b>Y:</b> %{y}<br><extra></extra>', // Customize tooltip
    },
  ];

  barLayout = {
    margin: {
      pad: 13,
    },
    title: {
      text: 'Sensor bar graph',
      font: {
        size: 25,
        weight: 500,
      },
      xref: 'paper',
      x: 0, // Left align
      y: 1.1,
    },

    showlegend: false,
    responsive: true,
    yaxis: {
      tickmode: 'array',
      tickvals: [0, 50, 100, 150, 200],
      color: 'grey',
      gridcolor: '#D3D3D3',
      gridwidth: 1,
      tickfont: {
        size: 12,
      },
    },
    xaxis: {
      tickangle: -55,
      color: 'grey',
      tickfont: {
        size: 10,
      },
    },
    // width: 0.5
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

  ngOnInit() {
    // Configuration for responsiveness
    const config = {
      responsive: true,
      displayModeBar: false,
    };
  }
}
