import './App.css'
import React, { Component } from 'react'
import WeatherInfoBox from './Component/WeatherInfoBox'
import TempTimeCityDisplay from './Component/TempTimeCityDisplay'

export default class App extends Component {
  render() {
    return (
      <>
        <div id='bodyBg'>
          <div id="weatherInfoContainer">
             <WeatherInfoBox/>
             <TempTimeCityDisplay/>
          </div>
          
          

          
          
        </div>
      </>
    )
  }
}

