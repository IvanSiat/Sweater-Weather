import React from 'react';
import './styles.css';
import { Card, Image } from 'semantic-ui-react'

const Weatherdetails = (props) => {
   return (
    <div>
    {props.responseObj.cod === 200 ?
        <div class="ui centered card">
            
             <Card>
             <Image src={`https://countryflagsapi.com/svg/${props.responseObj.sys.country}`} wrapped ui={false} />
    <Card.Content>
        <Card.Header className="header">City of {props.responseObj.name}<Image src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`} wrapped ui={false} /></Card.Header>
        
        <p>Temperature: {Math.ceil(props.responseObj.main.temp - 273.15) + " C\u00B0 / " + Math.ceil(props.responseObj.main.temp * 9/5 - 459.67) + " F\u00B0" }</p>
        <p>Feels Like: {Math.ceil(props.responseObj.main.feels_like - 273.15) + " C\u00B0 / " + Math.ceil(props.responseObj.main.feels_like * 9/5 - 459.67) + " F\u00B0" }</p>
        <p>Country: {props.responseObj.sys.country}  
        
        </p>
        <p>Description: {props.responseObj.weather[0].description} </p>
        
    </Card.Content>
  </Card>
        </div>
    : null
    }
</div>
   )
}

export default Weatherdetails;