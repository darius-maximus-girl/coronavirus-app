import React from "react";
import ReactCountUp from "react-countup-v2";

function Country({ country }) {
  let imgSrc = `https://cdn.countryflags.com/thumbs/${country.Slug === 'us' ? 'united-states-of-america' : country.Slug}/flag-400.png`;

  return (
    <li className="all-countries__item">
      <div>
        {/* <img src={imgSrc}></img> */}
        <p className="all-countries__item-country">{country.Country}</p>
      </div>
      <p className="all-countries__item-data">Confirmed: <span><ReactCountUp endVal={country.TotalConfirmed} /></span></p>
      <p className="all-countries__item-data">Total deaths: <span><ReactCountUp endVal={country.TotalDeaths} /></span></p>
      <p className="all-countries__item-data">Recovered: <span><ReactCountUp endVal={country.TotalRecovered}/></span></p>
    </li>
  );
}

export default Country;
