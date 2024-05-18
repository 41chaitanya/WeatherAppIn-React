import React, { Component } from "react";

export default class TempTimeCityDisplay extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      icon:undefined,
      cityName:undefined,
      temperature:undefined,
      humidity:undefined,
      pressure:undefined,
      windSpeed:undefined,
      weatherCondition:undefined,
    };
  }
  setWeatherConditionIcon=(weatherCondition)=>{
    let iconUrl=undefined;
    switch (weatherCondition) {
      case "Haze":
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg" ;
        break;
      case "Clouds":
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg" ;
        break;
      case "Rain":
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg" ;
        break;
      case "Snow":
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg" ;
        break;
      case "Dust":
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/dust-wind.svg" ;
        break;
      case "Drizzle":
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg" ;
        break;
      case "Fog":
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/tornado.svg" ;
        break;
      case "Smoke":
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-smoke.svg" ;
        break;
      case "Tornado":
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/tornado.svg" ;
        break;
      default:
        iconUrl= "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg" ;
    }
    this.setState({ icon: iconUrl });
  };

  fetchWeatherData = (CityName) => {
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=06a6917e9d6170ae095c0968c3b53a3a&units=metric`;
    
    fetch(Url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error fetching weather data");
      }
    })
    .then((data) => {
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed,
        weatherCondition: data.weather[0].main,
        cityName: data.name,
      });
      this.props.onTemperatureUpdate(data.main.temp);
      this.setWeatherConditionIcon(data.weather[0].main)
    })
    .catch((error) => {
      console.log(error);
    });
  };
  componentDidMount = () => {
    this.fetchWeatherData();
  };
  
  setCityName = (event) => {
    const inputValue = document.querySelector("#searchInput");
    const cityName = inputValue.value;
  
    this.fetchWeatherData(cityName);
  };
  
  render() {

    return (
      <div id="tempTimeCityDisplay">
        <img id="weatherConditionIcon" src={this.state.icon} alt="" />
        <div id="weatherCondition">{this.state.weatherCondition}</div>
        <div id="searchBar">
          <input id="searchInput" type="text" />
          <button onClick={this.setCityName}>Search</button>
        </div>
        <div id="cityName">{this.state.cityName}</div>
        <div id="weatherDetail">
          <tbody className="weatherInfo">
            <tr>Teperature:</tr>
            <tr>
              {this.state.temperature}
              <sup>o</sup>C
            </tr>
          </tbody>
          <tbody className="weatherInfo">
            <tr>Humidity:</tr>
            <td>{this.state.humidity} %</td>
          </tbody>
          <tbody className="weatherInfo">
            <tr>Pressure:</tr>
            <tr>{this.state.pressure}hPa</tr>
          </tbody>

          <tbody className="weatherInfo">
            <tr>Wind Speed:</tr>
            <tr>{this.state.windSpeed}Km/h</tr>
          </tbody>
        </div>
      </div>
    );
  }
}

