import React, { useState, useEffect } from "react";
import Country from "./country";

function AllCountries({ countries }) {
  const [sortedCountries, setSortedCountries] = useState([]);

  useEffect(() => {
    let sortedResults = [...countries].sort((a, b) => {
        return b.TotalConfirmed - a.TotalConfirmed;
      }) 
    setSortedCountries(sortedResults);
  }, [])

  const sortResults = (val) => {
    let sortedResults = [...countries].sort((a, b) => {
      if (val === "deaths") {
        return b.TotalDeaths - a.TotalDeaths;
      } else if (val === "cases") {
        return b.TotalConfirmed - a.TotalConfirmed;
      } else if (val === "recovered") {
        return b.TotalRecovered - a.TotalRecovered;
      }
    });
    setSortedCountries(sortedResults);
  };

  return (
    <div className="all-container">
      <p className="all-text">Sort countries by the highest number of:</p>
      <div className="all-btns">
      <button className="all-btns__btn" onClick={() => sortResults("cases")}>Cases</button>
      <button className="all-btns__btn" onClick={() => sortResults("deaths")}>Deaths</button>
      <button className="all-btns__btn" onClick={() => sortResults("recovered")}>Recoveries</button>
      </div>
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
