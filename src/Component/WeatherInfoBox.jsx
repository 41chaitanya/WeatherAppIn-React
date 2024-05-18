import React, { Component } from "react";

export default class WeatherInfoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // placeName: "",
      day:undefined,
      date:undefined,
      month:undefined,
      year:undefined,
      time:undefined,
      // oneOf5days:undefined,
      icon:undefined,
    };
  }
  
    componentDidMount(){
      this.dateBuilder()
      this.timerID = setInterval(()=>{
        this.timeUpdate()
      },1000)
      // this.timeUpdate()
  
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    setIconOfFiveDaySWeather(weatherCondition){
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

    }
  dateBuilder = () => {
    const d = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    this.setState({
      day: days[d.getDay()],
      date: d.getDate(),
      month: months[d.getMonth()],
      year: d.getFullYear(),
    });   
  };
  timeUpdate(){
    const d= new Date()
    this.setState({
      time:d.toLocaleTimeString()
    })
  }
  

  render() {
    return (
      <div id="weatherInfoBox">
        <div id="fivedaysWeather">
          <div id="dayNum">
          <div className="day" id="day1">01 </div>
          <div className="day" id="day2">02 </div>
          <div className="day" id="day3">03</div>
          <div className="day" id="day4">04 </div>
          <div className="day" id="day5">05 </div>

          </div>
          <div id="fiveDayIcon">
          <img className="oneOffiveWeather" src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg" alt="" />
          <img className="oneOffiveWeather" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/dust-wind.svg" alt="" />
          <img className="oneOffiveWeather" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/tornado.svg" alt="" />
          <img className="oneOffiveWeather" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg" alt="" />
          <img className="oneOffiveWeather" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg" alt="" />

          </div>
          <div id="fiveDayTempetature">
            <span className="temp">20<sup>o</sup>C</span>
            <span className="temp">25<sup>o</sup>C</span>
            <span className="temp">30<sup>o</sup>C</span>
            <span className="temp">37<sup>o</sup>C</span>
            <span className="temp">40<sup>o</sup>C</span>
          </div>
         
        </div>
        {/* <div id="placeName">{this.state.placeName}</div> */}
        <div id="temperature">
          {this.props.temperature}
          <sup>o</sup>C
        </div>
        <div id="time">{this.state.time}</div>
        <div id="dateConteiner">
          <div id="day">{this.state.day},</div>
          <div id="date">{this.state.date}</div>
          <div id="month">{this.state.month}</div>
          <div id="year">{this.state.year}</div>
        </div>
      </div>
    );
  }
}
