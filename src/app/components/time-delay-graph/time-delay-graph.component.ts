import { Component } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';

@Component({
  selector: 'app-time-delay-graph',
  standalone: true,
  imports: [PlotlyModule],
  templateUrl: './time-delay-graph.component.html',
  styleUrl: './time-delay-graph.component.css',
})
export class TimeDelayGraphComponent {
  // Time Delay Data

  getValues(): { x: number[]; y: number[] } {
    let resx = [];
    let resy = [];
    for (let i = 0; i < 50; i++) {
      resx.push(i * 50);
      resy.push(8);
    }
    return {
      x: resx,
      y: resy,
    };
  }

  coordinateValues = this.getValues();

  timeDelayData = [
    {
      type: 'bar',
      y: this.coordinateValues.y,
      x: this.coordinateValues.x,
      marker: {
        color: '#ffa500',
        width: 1,
      },
      name: 'Delay prev point',
    },
  ];

  timeDelayLayout = {
    margin: {
      pad: 13,
    },
    title: {
      text: 'Time delays',
      font: {
        size: 25,
        weight: 500,
      },
      xref: 'paper',
      x: 0, // Left align
      y: 1.1,
      
    },
    yaxis: {
      range: [0, 10],
      tickmode: 'array',
      color: 'grey',
      gridcolor: '#D3D3D3',
      gridwidth: 1,
      tickfont: {
        size: 12,
      },
    },
    xaxis: {
      range: [0, 2500],
      color: 'grey',
      tickfont: {
        size: 12,
      },
    },
    showlegend: true,
    responsive: true,
    hovertemplate: '<b>X:</b> %{x}<br><b>Y:</b> %{y}<br><extra></extra>', // Customize tooltip
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
