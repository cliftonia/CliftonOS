import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: null
    };
  }

  componentDidMount() {
    setInterval(this.Timer, 1000);
  }

  Timer = () => {
    var date = new Date();

    var hours = date.getHours().toString();

    var minutes = date.getMinutes().toString();

    var seconds = date.getSeconds().toString();

    var time =
      hours.padStart(2, "0") +
      ":" +
      minutes.padStart(2, "0") +
      ":" +
      seconds.padStart(2, "0");

    this.setState({ time });
  };

  render() {
    const { time } = this.state;
    return (
      <div className="popup">
        <h1 className="time-h1">{time ? time : ""}</h1>
      </div>
    );
  }
}

export default Clock;
