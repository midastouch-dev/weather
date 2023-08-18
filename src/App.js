import "./App.css";
// import WeatherMap from "./components/WeatherMap";
import Tailwind from "./Tailwind";
import axios from "axios";
import { useState, useEffect } from "react";
import { usePosition } from "use-position";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = "5451c9446025f06940f171aee23ae165";
    
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Api Error");
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      getWeatherData(latitude, longitude);
    }
  }, [latitude, longitude]);

  console.log(weather);

  return (
    <div className="App">
      {/* <WeatherMap weather={weather} /> */}

      <Tailwind weather={weather} />
    </div>
  );
};

export default App;
