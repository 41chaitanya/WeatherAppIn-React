import './App.css'
import React, { Component } from 'react'
import WeatherInfoBox from './Component/WeatherInfoBox'
import TempTimeCityDisplay from './Component/TempTimeCityDisplay'


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      temperature:undefined
    }
  }
  handleTemperatureUpdate = (temperature) => {
    this.setState({ temperature });
  };
  
  
  render() {
    return (
      <>
        <div id='bodyBg'>
          <div id="weatherInfoContainer">
             <WeatherInfoBox temperature={this.state.temperature}/>
             <TempTimeCityDisplay onTemperatureUpdate={this.handleTemperatureUpdate}/>
          </div>
          
          

          
          
        </div>
      </>
    )
  }
}

