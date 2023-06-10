import { useState } from "react";

import "./Input.css";
import Button from "./Button";

const Input = () => {
  const [distance, setDistance] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [result, setResult] = useState("__");

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
    setResult("__");
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
      <div className="title">Pace Calculator</div>
      <div className="distance ">
        <div>Distance:</div>
        <input
          value={distance}
          onChange={(e) => refresh("distance", e)}
          placeholder="00"
          className="value"
        />
        <div>KM</div>
      </div>

      <div className="time">
        <div>Time:</div>
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
      </div>

      <div className="result">
        <div>Result: </div>
        <div className="text"> {result} </div>
        <div>min/km</div>
      </div>
      <div className="row">
        <Button
          name="Calculate"
          className="calculate"
          handleClick={calculatePace}
        />
        <Button name="Reset" handleClick={resetPace} />
      </div>
    </div>
  );
};

export default Input;
