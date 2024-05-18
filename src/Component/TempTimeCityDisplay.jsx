import React, { Component } from "react";

export default class TempTimeCityDisplay extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      cityName: "",
      temperature: 32,
      humidity: 23,
      visibility: 3000,
      windSpeed: 3,
      weatherCondition: "Haze",
    };
  }
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
          visibility: data.visibility,
          windSpeed: data.wind.speed,
          weatherCondition: data.weather[0].main,
          cityName: data.name,
        });
        this.props.onTemperatureUpdate(data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount = () => {
    this.fetchWeatherData("London");
  };

  setCityName = (event) => {
    const inputValue = document.querySelector("#searchInput");
    const cityName = inputValue.value;
    this.setState({ cityName });
    this.fetchWeatherData(cityName);
  };

  render() {
    return (
      <div id="tempTimeCityDisplay">
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
            <tr>Visiblity:</tr>
            <tr>{this.state.visiblity}ml</tr>
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
