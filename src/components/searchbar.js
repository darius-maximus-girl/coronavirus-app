import React, { useState, useEffect } from "react";
import Chart from "./chart";

function Searchbar({ countries }) {
  const [userCountry, setUserCountry] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const filterCountries = () => {
    const filtered = countries.filter(
      el => el.Country.toLowerCase() === userCountry.toLowerCase()
    );

    if (filtered.length >= 1 && userCountry !== "") {
      setCountry(filtered);
      setUserCountry("")
      setMessage("");
    } else {
      setMessage("Please, provide the correct name of the country");
    }
  };

  return (
    <div className="search-container">
      <form className="searchbar" onSubmit={e => e.preventDefault()}>
        <input
          className="searchbar__input"
          onChange={e => setUserCountry(e.target.value)}
          value={userCountry}
          placeholder="Search by a country"
        ></input>
        <button className="searchbar__btn" onClick={() => filterCountries()}>Search</button>
      </form>
      <p className="searchbar-msg">{message}</p>
      {country && <Chart country={country} />}
    </div>
  );
}

export default Searchbar;
