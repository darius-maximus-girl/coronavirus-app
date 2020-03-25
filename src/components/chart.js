import React from "react";
import { Doughnut, defaults } from "react-chartjs-2";

defaults.global.defaultFontFamily = "Cutive Mono";
defaults.global.defaultFontSize	= 15;

function Chart({ country }) {
  let countryData = country[0];

  const data = {
    labels: [
      "Confirmed",
      "New cases",
      "Deaths",
      "New deaths",
      "Recovered",
      "Newly recovered"
    ],
    datasets: [
      {
        label: "My First dataset",
        data: [
          countryData.TotalConfirmed,
          countryData.NewConfirmed,
          countryData.TotalDeaths,
          countryData.NewDeaths,
          countryData.TotalRecovered,
          countryData.NewRecovered
        ],
        backgroundColor: [
          "#fb79b5",
          "#f2bcff",
          "#b68dec",
          "#c6b6da",
          "#B5EAD7",
          "#d0f5d0"
        ]
      }
    ]
  };

  return (
    <div className="chart">
      <Doughnut data={data} />
      <div className="chart-summary">
        <p className="chart-summary__country">Summary for <span>{countryData.Country}</span></p>
        <p className="chart-summary__data">Total cases: <span>{countryData.TotalConfirmed}</span></p>
        <p className="chart-summary__data">New cases: <span>{countryData.NewConfirmed}</span></p>
        <p className="chart-summary__data">Total deaths: <span>{countryData.TotalDeaths}</span></p>
        <p className="chart-summary__data">New deaths: <span>{countryData.NewDeaths}</span></p>
        <p className="chart-summary__data">All Recovered cases: <span>{countryData.TotalRecovered}</span></p>
        <p className="chart-summary__data">Newly recovered: <span>{countryData.NewRecovered}</span></p>
      </div>
    </div>
  );
}

export default Chart;
