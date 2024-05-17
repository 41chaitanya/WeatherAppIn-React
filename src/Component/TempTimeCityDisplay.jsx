import React, { Component } from 'react'

export default class TempTimeCityDisplay extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        cityName:"Bhopal",
         temperature:32,
         humidity:23,
         visiblity:3000,
         windSpeed:3,
         weatherCondition:"Haze"
      }
    }
    
  render() {
    return (
      <div id='tempTimeCityDisplay'>
        <div id="weatherCondition">{this.state.weatherCondition}</div>
        <div id="searchBar">
            <input id='searchInput' type="text" />
            <button>Search</button>
        </div>
        <div id="cityName">{this.state.cityName}</div>
        <div id="weatherDetail">
            <tbody className="weatherInfo">
                <tr>Teperature:</tr>
                <tr>{this.state.temperature}<sup>o</sup>C</tr>
                
            </tbody>
            <tbody className="weatherInfo">
                <tr>Humidity:</tr>
                <td>{this.state.humidity} %</td>
               
            </tbody>
            <tbody className="weatherInfo">
                <tr>Visiblity:</tr>
                <tr>{this.state.visiblity}ml</tr>
            </tbody>
                
            <tbody className="weatherInfo">
                <tr>Wind Speed:</tr>
                <tr>{this.state.windSpeed}Km/h</tr>
            </tbody>
           
        </div>
        
      </div>
    )
  }
}
