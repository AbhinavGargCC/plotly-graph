import { Component } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';

@Component({
  selector: 'app-bar-graph-group-entities',
  standalone: true,
  imports: [PlotlyModule],
  templateUrl: './bar-graph-group-entities.component.html',
  styleUrl: './bar-graph-group-entities.component.css',
})
export class BarGraphGroupEntitiesComponent {
  countryData = [
    {
      name: 'Canada',
      color: '#33F6FF',
      data: {
        states: 110,
        cities: 150,
        languages: 180,
      },
    },
    {
      name: 'India',
      color: '#FF5733',
      data: {
        states: 128,
        cities: 120,
        languages: 199,
      },
    },
    {
      name: 'USA',
      color: '#33FF57',
      data: {
        states: 150,
        cities: 100,
        languages: 109,
      },
    },
    {
      name: 'China',
      color: '#3357FF',
      data: {
        states: 119,
        cities: 100,
        languages: 200,
      },
    },
    {
      name: 'Brazil',
      color: '#FF33A1',
      data: {
        states: 126,
        cities: 120,
        languages: 180,
      },
    },
    {
      name: 'Germany',
      color: '#FFD733',
      data: {
        states: 160,
        cities: 170,
        languages: 176,
      },
    },
    {
      name: 'Australia',
      color: '#33FFD7',
      data: {
        states: 116,
        cities: 150,
        languages: 120,
      },
    },
    {
      name: 'Russia',
      color: '#D733FF',
      data: {
        states: 185,
        cities: 110,
        languages: 100,
      },
    },
    {
      name: 'Japan',
      color: '#FF33F6',
      data: {
        states: 147,
        cities: 180,
        languages: 115,
      },
    },
    {
      name: 'South Africa',
      color: '#F6FF33',
      data: {
        states: 192,
        cities: 100,
        languages: 111,
      },
    },
  ];

  countries: string[] = this.countryData.map((country) => country.name);

  countryInfo = this.countryData.reduce<{
    states: number[];
    cities: number[];
    languages: number[];
  }>(
    (acc, curr) => {
      acc.states.push(curr.data.states); // Accumulate states
      acc.cities.push(curr.data.cities); // Accumulate cities
      acc.languages.push(curr.data.languages); // Accumulate languages
      return acc; // Return the accumulator
    },

    {
      states: [],
      cities: [],
      languages: [],
    }
  );

  countryStates: number[] = this.countryInfo.states;
  countryCities: number[] = this.countryInfo.cities;
  countryLanguages: number[] = this.countryInfo.languages;

  traceForStates = {
    type: 'bar',
    name: 'States',
    x: this.countries,
    y: this.countryStates,
    hovertemplate:
      '<b>Country:</b> %{x}<br>' + '<b>States:</b> %{y}<extra></extra>',
  };
  traceForLanguages = {
    type: 'bar',
    name: 'Languages',
    x: this.countries,
    y: this.countryLanguages,
    hovertemplate:
      '<b>Country:</b> %{x}<br>' + '<b>Languages:</b> %{y}<extra></extra>',
  };
  traceForCities = {
    type: 'bar',
    name: 'Cities',
    x: this.countries,
    y: this.countryCities,
    hovertemplate:
      '<b>Country:</b> %{x}<br>' + '<b>Cities:</b> %{y}<extra></extra>',
  };

  barData = [this.traceForCities, this.traceForStates, this.traceForLanguages];

  barLayout = {
    scattermode: 'group',
    title: {
      text: 'Grouped by Country',
      font: {
        size: 25,
        weight: 500,
      },
      xref: 'paper',
      x: 0,
      y: 1.1,
    },
    hoverlabel: {
      bgcolor: 'white',
      bordercolor: 'black',
      font: {
        family: 'Arial',
        size: 14,
        color: 'black',
      },
    },
    showlegend: false,
    responsive: true,
    yaxis: {
      title: 'Facts',
      gridcolor: '#D3D3D3',
      gridwidth: 1,
      tickfont: {
        size: 11,
      },
      zeroline: false,
    },
    xaxis: {
      title: 'Country',
      tickfont: {
        size: 11,
      },
    },
    margin: {
      pad: 10,
    },
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
