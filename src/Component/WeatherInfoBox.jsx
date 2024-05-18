import React, { Component } from "react";

export default class WeatherInfoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // placeName: "",
      day: "",
      date: "",
      month: "",
      year: "",
      time: "",
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
