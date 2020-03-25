import React from "react";
import ReactCountUp from "react-countup-v2";

function Summary({ countries }) {
  const reduced = countries.reduce(
    (acc, cur) => ({
      totalCases: (acc.totalCases || 0) + cur.TotalConfirmed,
      totalDeaths: (acc.totalDeaths || 0) + cur.TotalDeaths,
      totalRecovered: (acc.totalRecovered || 0) + cur.TotalRecovered
    }),
    {}
  );

  let currentlySick =
    reduced.totalCases - reduced.totalDeaths - reduced.totalRecovered;

  return (
    <div className="summary">
      <p className="summary__item">
        Total Cases
        <br></br>
       <span className="summary__item-emphasis"><ReactCountUp endVal={reduced.totalCases} /></span>
      </p>
      <p className="summary__item">
        Dead
        <br></br>
        <span className="summary__item-emphasis"><ReactCountUp endVal={reduced.totalDeaths} /></span>
      </p>
      <p className="summary__item">
        Recovered
        <br></br>
        <span className="summary__item-emphasis"><ReactCountUp endVal={reduced.totalRecovered} /></span>
      </p>
      <p className="summary__item">
        Currently Sick
        <br></br>
        <span className="summary__item-emphasis">{currentlySick}</span>
      </p>
    </div>
  );
}

export default Summary;
