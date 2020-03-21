import React, {useState} from 'react';
import Chart from './chart';

const api = 'https://api.covid19api.com/summary';

function Searchbar() {

    const [country, setCountry] = useState('');
    const [showChart, setShowChart] = useState(false);
    const [message, setMessage] = useState('')

    const fetchData = () => {

        if (message.length >= 1) {
            
        fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((countries) => {
            let results = Object.values(countries);
            let filteredCountry = results[0].filter(name =>
                name.Country === country);
            setCountry(filteredCountry);
            let date = results[1];
            console.log('COUNTRIES', filteredCountry);
            console.log('DATE', date);
            setShowChart(true)
            setMessage('')
        });  
        } else {
            setMessage('Please, provide the name of the country')
        }
    }

    return (
        <div className="searchbar">
            <input className="searchbar__input" onChange={e => setCountry(e.target.value)} placeholder="Search by a country"></input>
            <button className="searchbar__btn" onClick={() => fetchData()}>Search</button>
            {message}
            <div className="searchbar__date"></div>
            {showChart && <Chart country={country}/>}
        </div>
    );
}

export default Searchbar;