import React, { useState } from 'react' ;
import Weatherdetails from "./weatherdetails";
const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    // future improvement, let user input state/province and country, for cities that have similar names but different countries, e.g. London, ON, CA, and London, UK

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
    <h2>Enter City, Country Code Below To Check Today's Weather</h2>

    <div>

    </div>{JSON.stringify(responseObj.message)}
    <form onSubmit={getForecast}>
                <input class="ui huge action input SearchBar-input"
                    type="text"
                    placeholder="ex. Los Angeles, US"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />


                    
                <button class = "ui icon button"type="submit"><i aria-hidden="true" class="search icon "></i></button>
                
            </form>
            <Weatherdetails responseObj={responseObj}/>
            
</div>


   )
}
export  default Forecast;