import React from 'react';
import './styles.css';
import { Card, Image } from 'semantic-ui-react'
import moment from 'moment';


const Weatherdetails = (props) => {
    
   return (
    <div>
    {props.responseObj.cod === 200 ?
        <div class="ui centered card">
            
             <Card>
             
    <Card.Content>
        <Card.Header className="header">City of {props.responseObj.name}, {props.responseObj.sys.country}&nbsp;&nbsp;&nbsp;<Image src={`https://countryflagsapi.com/png/${props.responseObj.sys.country}`} width="45" height="25" /></Card.Header>
        <div class = "details">
        <p>{moment().format('dddd')}</p>
        <p>{moment().format('LL')}</p>
        <p>{Math.ceil(props.responseObj.main.temp - 273.15) + " C\u00B0 / " + Math.ceil(props.responseObj.main.temp * 9/5 - 459.67) + " F\u00B0" }</p>
        <p>feels like {Math.ceil(props.responseObj.main.feels_like - 273.15) + " C\u00B0 / " + Math.ceil(props.responseObj.main.feels_like * 9/5 - 459.67) + " F\u00B0" }</p>
        <p>{props.responseObj.weather[0].description} </p>
        <Image src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`} wrapped ui={false} width="80" height="80" /> 
        </div>
        
    </Card.Content>
  </Card>
        </div>
    : null
    }
</div>
   )
}

export default Weatherdetails;