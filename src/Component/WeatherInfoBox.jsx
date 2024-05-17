import React, { Component } from "react";

export default class WeatherInfoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeName: "New Market",
      temperature: 32,
      day: "Wednesday",
      date: 19,
      month: "May",
      year: 2020,
      time: "10:59:01",
    };
  }

  render() {
    return (
      <div id="weatherInfoBox">
        <div id="placeName">{this.state.placeName}</div>
        <div id="temperature">
          {this.state.temperature}
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
