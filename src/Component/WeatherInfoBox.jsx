import React, { Component } from "react";

export default class WeatherInfoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day:undefined,
      date:undefined,
      month:undefined,
      year:undefined,
      time:undefined,
      icon:undefined,
      cityName: this.props.cityName,
      day1WeatherIcon:undefined ,
      day2WeatherIcon:undefined ,
      day3WeatherIcon:undefined ,
      day4WeatherIcon:undefined ,
      day5WeatherIcon:undefined ,
      day1Temperature:undefined ,
      day2Temperature:undefined ,
      day3Temperature:undefined ,
      day4Temperature:undefined ,
      day5Temperature:undefined ,
    };
  }
  
    componentDidMount(){
      this.fetchFiveDaysWeather(this.state.cityName);

      this.dateBuilder()
      this.timerID = setInterval(()=>{
        this.timeUpdate()
      },1000)
  
    }
    componentDidUpdate = (prevProps) => {
      if(this.props.cityName!==prevProps.cityName){
        this.setState({ cityName: this.props.cityName },()=>{
          this.fetchFiveDaysWeather(this.state.cityName);
        })
      }
      
    }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    fetchFiveDaysWeather=(cityName)=>{


      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=06a6917e9d6170ae095c0968c3b53a3a&units=metric`)
      .then((res)=>{
        if(res.ok){
          return res.json();

        }
        else{
          throw new Error('Network response was not ok.')
        }
      })
      .then((data)=>{
        // console.log(data)
        // this.setState({
        //   day1WeatherIcon:undefined,
        //   day2WeatherIcon:undefined,
        //   day3WeatherIcon:undefined,
        //   day4WeatherIcon:undefined,
        //   day5WeatherIcon:undefined,
        // })
        this.changeFirtDay(data.list[0])
        this.changeSecondDay(data.list[1])
        this.changeThreeDay(data.list[2])
        this.changeFourthDay(data.list[3])
        this.changeFifthDay(data.list[4])
        // this.setIconOfFiveDaySWeather(data)
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
    changeFirtDay(dayOne){
        const dayOneWeatherCondition=dayOne.weather[0].main
      const iconUrl=setIconOfFiveDaySWeather(dayOneWeatherCondition)
      this.setState({day1WeatherIcon:iconUrl,day1Temperature: dayOne.main.temp})

    }
    changeSecondDay(daySecond){
      const dayTowWeatherCondition=daySecond.weather[0].main
      const iconUrl=setIconOfFiveDaySWeather(dayTowWeatherCondition)
      this.setState({day2WeatherIcon:iconUrl,day2Temperature: daySecond.main.temp})

    }
    changeThreeDay(dayThree){
      const dayThreeWeatherCondition=dayThree.weather[0].main
      const iconUrl=setIconOfFiveDaySWeather(dayThreeWeatherCondition)
      this.setState({day3WeatherIcon:iconUrl,day3Temperature: dayThree.main.temp})

    }
    changeFourthDay(dayFour){
      const dayFourthWeatherCondition=dayFour.weather[0].main
      const iconUrl=setIconOfFiveDaySWeather(dayFourthWeatherCondition)
      this.setState({day4WeatherIcon:iconUrl,day4Temperature: dayFour.main.temp})

    }
    changeFifthDay(dayFive){
      const dayFiveWeatherCondition=dayFive.weather[0].main
      const iconUrl=setIconOfFiveDaySWeather(dayFiveWeatherCondition)
      this.setState({day5WeatherIcon:iconUrl,day5Temperature: dayFive.main.temp})

    }

    setIconOfFiveDaySWeather(weatherCondition){
      let iconUrl
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
    // this.setState({ icon: iconUrl });
    return iconUrl

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
          <img className="oneOffiveWeather" src={this.state.day1WeatherIcon} alt="" />
          <img className="oneOffiveWeather" src={this.state.day2WeatherIcon}alt="" />
          <img className="oneOffiveWeather" src={this.state.day3WeatherIcon} alt="" />
          <img className="oneOffiveWeather" src={this.state.day4WeatherIcon} alt="" />
          <img className="oneOffiveWeather" src={this.state.day5WeatherIcon} alt="" />

          </div>
          <div id="fiveDayTempetature">
            <span className="temp">{this.state.day1Temperature}<sup>o</sup>C</span>
            <span className="temp">{this.state.day2Temperature}<sup>o</sup>C</span>
            <span className="temp">{this.state.day3Temperature}<sup>o</sup>C</span>
            <span className="temp">{this.state.day4Temperature}<sup>o</sup>C</span>
            <span className="temp">{this.state.day5Temperature}<sup>o</sup>C</span>
          </div>
         
        </div>
        {/* <div id="placeName">{this.state.placeName}</div> */}
        {/* <div id="temperature">
          {this.props.temperature}
          <sup>o</sup>C
        </div> */}
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
