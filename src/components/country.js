import React from "react";
import ReactCountUp from "react-countup-v2";

function Country({ country, category }) {

  return (
    <li className="all-countries__item">
      <div>
        <p className="all-countries__item-country">{country.Country}</p>
      </div>
      <p className="all-countries__item-data">Confirmed: <span className={category.button1 ? 'active-data' : ''}><ReactCountUp endVal={country.TotalConfirmed} /></span></p>
      <p className="all-countries__item-data">Total deaths: <span className={category.button2 ? 'active-data' : ''} ><ReactCountUp endVal={country.TotalDeaths} /></span></p>
      <p className="all-countries__item-data">Recovered: <span className={category.button3 ? 'active-data' : ''}><ReactCountUp endVal={country.TotalRecovered}/></span></p>
    </li>
  );
}

export default Country;
