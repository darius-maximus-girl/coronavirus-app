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
      <p>
        Total Cases:
        <ReactCountUp endVal={reduced.totalCases} />
      </p>
      <p>
        Dead:
        <ReactCountUp endVal={reduced.totalDeaths} />
      </p>
      <p>
        Recovered: <ReactCountUp endVal={reduced.totalRecovered} />
      </p>
      <p>Currently Sick: {currentlySick}</p>
    </div>
  );
}

export default Summary;
