import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function Chart({country}) {

    let countryData = country[0];

    const data = {
        labels: ['Confirmed', 'New cases', 'Deaths', 'New deaths', 'Recovered', 'Newly recovered'],
        datasets: [
          {
            label: 'My First dataset',
            // fill: true,
            // lineTension: 0.1,
            // borderColor: '#410748bf',
            // borderCapStyle: 'butt',
            // borderDash: [],
            // borderDashOffset: 0.2,
            // borderJoinStyle: 'miter',
            // pointBorderColor: 'rgba(75,192,192,1)',
            // pointBackgroundColor: '#fff',
            // pointBorderWidth: 1,
            // pointHoverRadius: 5,
            // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            // pointHoverBorderColor: 'rgba(220,220,220,1)',
            // pointHoverBorderWidth: 2,
            // pointRadius: 1,
            // pointHitRadius: 10,
            data: [countryData.TotalConfirmed, countryData.NewConfirmed, countryData.TotalDeaths, countryData.NewDeaths, countryData.TotalRecovered, countryData.NewRecovered],
            backgroundColor: ['#fb79b5', '#f2bcff', '#b68dec', '#c6b6da', '#B5EAD7', '#d0f5d0'] 
          }
        ]
      };

    return (
        <div className="chart">
            <Doughnut data={data} />
        </div>
    );
}

export default Chart; 
