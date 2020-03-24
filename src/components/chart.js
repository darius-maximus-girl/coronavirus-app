import React from "react";
import { Doughnut } from "react-chartjs-2";

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
      },
    ]
  };

  return (
    <div className="chart">
      <Doughnut data={data} />
      <div>
        Summary:
        <p>Total cases: {countryData.TotalConfirmed}</p>
        <p>New cases: {countryData.NewConfirmed}</p>
        <p>Total deaths: {countryData.TotalDeaths}</p>
        <p>New deaths: {countryData.NewDeaths}</p>
        <p>All Recovered cases: {countryData.TotalRecovered}</p>
        <p>Newly recovered: {countryData.NewRecovered}</p>
      </div>
    </div>
  );
}

export default Chart;
