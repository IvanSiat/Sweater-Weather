import React, { useState } from 'react' ;
import Weatherdetails from "./weatherdetails";
const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    // future improvement, let user input state/province and country, for cities that have similar names but different countries, e.g. London, ON, CA, and London, UK
    //let [provstate, setProvstate] = useState(''); 
    //let [country, setCountry] = useState('');

    const uriEncodedCity = encodeURIComponent(city);
    function getForecast(e) {
        e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/weather?q=${uriEncodedCity}&APPID=${process.env.REACT_APP_API_KEY}`).then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
   }

   return (
    <div>
    <h2>Enter City Below To Check Weather Forecast</h2>
    <div>

    </div>
    <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <button type="submit">Get Weather Forecast</button>
                
            </form>
            <Weatherdetails responseObj={responseObj}/>
            
</div>

   )
}
export  default Forecast;