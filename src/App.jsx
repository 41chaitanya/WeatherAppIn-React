import './App.css'
import React, { Component } from 'react'
import WeatherInfoBox from './Component/WeatherInfoBox'
import TempTimeCityDisplay from './Component/TempTimeCityDisplay'


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cityName:undefined
    }
  }
  fiveDayTemp = (CityName) => {
    this.setState({ cityName:CityName });
  };
  
  
  render() {
    return (
      <>
        <div id='bodyBg'>
          <div id="weatherInfoContainer">
             <WeatherInfoBox cityName={this.state.cityName}/>
             <TempTimeCityDisplay onFiveDayTemp={this.fiveDayTemp}/>
          </div>
          
          

          
          
        </div>
      </>
    )
  }
}

