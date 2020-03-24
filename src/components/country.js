import React from "react";

function Country({ country }) {
  let imgSrc = `https://cdn.countryflags.com/thumbs/${country.Slug === 'us' ? 'united-states-of-america' : country.Slug}/flag-400.png`;

  return (
    <li>
      <div>
        {/* <img src={imgSrc}></img> */}
        <p>{country.Country}</p>
      </div>
      <p>Confirmed cases: {country.TotalConfirmed}</p>
      <p>Total deaths: {country.TotalDeaths}</p>
      <p>Recovered: {country.TotalRecovered}</p>
    </li>
  );
}

export default Country;
