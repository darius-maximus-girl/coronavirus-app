import React, { useState, useEffect } from "react";
import Country from "./country";
import RocketBtn from "./rocketBtn";

function AllCountries({ countries }) {
  const [sortedCountries, setSortedCountries] = useState([]);
  const [buttons, setButtons] = useState({
    button1: true,
    button2: false,
    button3: false
  });

  useEffect(() => {
    let sortedResults = [...countries].sort((a, b) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    });
    setSortedCountries(sortedResults);
  }, []);

  const sortResults = val => {
    let sortedResults = [...countries].sort((a, b) => {
      if (val === "cases") {
        setButtons({ button1: true, button2: false, button3: false });
        return b.TotalConfirmed - a.TotalConfirmed;
      } else if (val === "deaths") {
        setButtons({ button1: false, button2: true, button3: false });
        return b.TotalDeaths - a.TotalDeaths;
      } else if (val === "recovered") {
        setButtons({ button1: false, button2: false, button3: true });
        return b.TotalRecovered - a.TotalRecovered;
      }
    });
    setSortedCountries(sortedResults);
  };

  return (
    <div className="all-container">
      <p className="all-text">Sort countries by the highest number of:</p>
      <div className="all-btns">
        <button
          className={
            buttons.button1 ? "active-btn all-btns__btn" : "all-btns__btn"
          }
          onClick={() => sortResults("cases")}
        >
          Cases
        </button>
        <button
          className={
            buttons.button2 ? "active-btn all-btns__btn" : "all-btns__btn"
          }
          onClick={() => sortResults("deaths")}
        >
          Deaths
        </button>
        <button
          className={
            buttons.button3 ? "active-btn all-btns__btn" : "all-btns__btn"
          }
          onClick={() => sortResults("recovered")}
        >
          Recoveries
        </button>
      </div>
      <ul className="all-countries">
        {sortedCountries.map((country, key) => {
          return <Country key={key} country={country} category={buttons} />;
        })}
      </ul>
      <RocketBtn />
    </div>
  );
}

export default AllCountries;
