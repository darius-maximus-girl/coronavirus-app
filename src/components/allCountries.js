import React, { useState, useEffect } from "react";
import Country from "./country";

function AllCountries({ countries }) {
  const [sortedCountries, setSortedCountries] = useState([]);

  useEffect(() => {
      console.log(sortedCountries)
  }, [sortedCountries])

  const sortResults = (val) => {
    let sortedResults = countries.sort((a, b) => {
      if (val === "deaths") {
        return b.TotalDeaths - a.TotalDeaths;
      } else if (val === "cases") {
        return b.TotalConfirmed - a.TotalConfirmed;
      } else if (val === "recovered") {
        return b.TotalRecovered - a.TotalRecovered;
      }
    });
    console.log(sortedResults);
    setSortedCountries([...sortedResults]);
  };

  return (
    <div className="all-container">
      <p>Sort countries by the highest number of:</p>
      <button onClick={() => sortResults("deaths")}>Deaths</button>
      <button onClick={() => sortResults("cases")}>Cases</button>
      <button onClick={() => sortResults("recovered")}>Recoveries</button>
      <ul className="all-countries">
        {sortedCountries.map((country, key) => {
          return <Country key={key} country={country}/>
        })
    }
      </ul>
    </div>
  );
}

export default AllCountries;
