import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Searchbar from "./components/searchbar";
import Summary from "./components/summary";
import AllCountries from './components/allCountries';
import News from "./components/news";
import Virus from "./assets/virus.png";

const api = "https://api.covid19api.com/summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [dateStamp, setDateStamp] = useState("");
  let time = dateStamp.slice(11, 19);
  let date = new Date(dateStamp).toDateString();

  useEffect(() => {
    fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let results = Object.values(data);
        setCountries(results[0]);
        setDateStamp(results[1]);
      });
  }, []);

  useEffect(() => {}, [countries]);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar__logo">
          <img className="navbar__logo-img" src={Virus} alt="virus"></img>
          <p className="navbar__logo-txt">COVID-19</p>
          </div>
          <ul className="navbar__links">
            <Link to="/">
              <li className="navbar__links-link">Country data</li>
            </Link>
            <Link to="/allcountries">
              <li className="navbar__links-link">All countries</li>
            </Link>
            <Link to="/news">
              <li className="navbar__links-link">Latest news</li>
            </Link>
          </ul>
        </nav>
        <div className="date-container">
        {/* <p className="date-text">Get the lates data on coronavirus</p> */}
        <p className="date-data">
          Last update: <span>{date}</span>; <span>{time}</span>
        </p>
        </div>
        <Summary countries={countries} />
        <Switch>
          <Route path="/" exact>
            <Searchbar countries={countries} />
          </Route>
          <Route path="/allcountries">
            <AllCountries countries={countries}/>
          </Route>
          <Route path="/news">
            <News />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
