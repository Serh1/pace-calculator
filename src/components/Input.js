import { useState } from "react";

import "./Input.css";
import Button from "./Button";

const Input = () => {
  const [distance, setDistance] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [result, setResult] = useState("5.30");

  const refresh = (section, event) => {
    const newValue = event.target.value;
    switch (section) {
      case "distance":
        setDistance(newValue);
        break;
      case "hours":
        setHours(newValue);
        break;
      case "minutes":
        setMinutes(newValue);
        break;
      case "seconds":
        setSeconds(newValue);
        break;
      default:
        break;
    }
  };

  const resetPace = (event) => {
    setDistance("");
    setHours("");
    setMinutes("");
    setSeconds("");
    setResult("0.00");
  };

  const calculatePace = () => {
    if (distance === "" || (hours === "" && minutes === "" && seconds === "")) {
      alert("Error");
    } else if (
      false
      //   typeof hours === "string" ||
      //   typeof minutes === "string" ||
      //   typeof seconds === "string"
    ) {
      alert("Insert only numbers!");
    } else {
      const time = Number(hours * 60) + Number(minutes) + Number(seconds / 60);
      const result = (time / distance).toFixed(2);
      let min = Math.floor(result);
      let sec = Math.round((result - min) * 60);
      setResult(min + "." + (sec < 10 ? "0" : "") + sec);
    }
  };

  return (
    <div className="input-wrapper">
      <div className="col">
        <div className="distance ">
          <input
            value={distance}
            onChange={(e) => refresh("distance", e)}
            placeholder="00"
            className="distance_value"
          />
          <div>KM</div>
        </div>

        <div className="time">

          <input
            onChange={(e) => refresh("hours", e)}
            value={hours}
            placeholder="00"
            className="hours"
          />
          :
          <input
            onChange={(e) => refresh("minutes", e)}
            value={minutes}
            placeholder="00"
            className="minutes"
          />
          :
          <input
            onChange={(e) => refresh("seconds", e)}
            value={seconds}
            placeholder="00"
            className="seconds"
          />
            {/* <div>H/M/S</div> */}
        </div>

        <div className="row">
          <Button name="Reset" className="reset" handleClick={resetPace} s />
          <Button
            name="Calculate"
            className="calculate"
            handleClick={calculatePace}
          />
        </div>
      </div>
      <div className="result">
        <div className="col">
          <div className="value"> {result} </div>
          <div className="measurement">min/km</div>
        </div>
      </div>
    </div>
  );
};

export default Input;
