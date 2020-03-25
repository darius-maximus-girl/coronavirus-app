import React from "react";

function Country({ country }) {
  let imgSrc = `https://cdn.countryflags.com/thumbs/${country.Slug === 'us' ? 'united-states-of-america' : country.Slug}/flag-400.png`;

  return (
    <li className="all-countries__item">
      <div>
        {/* <img src={imgSrc}></img> */}
        <p className="all-countries__item-country">{country.Country}</p>
      </div>
      <p className="all-countries__item-cases">Confirmed cases: <span>{country.TotalConfirmed}</span></p>
      <p className="all-countries__item-deaths">Total deaths: <span>{country.TotalDeaths}</span></p>
      <p className="all-countries__item-recovered">Recovered: <span>{country.TotalRecovered}</span></p>
    </li>
  );
}

export default Country;
