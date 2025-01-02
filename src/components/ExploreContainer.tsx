import "./ExploreContainer.css";
import CurrentWeatherContainer from "./CurrentWeather/CurrrentWeatherContainer";
import ForecastWeather from "./Forecast/ForecastContainer";
import { WeatherService } from "../services/WeatherService";
import { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "../types/weather/CurrentWeatherResponse";
import { ForecastWeatherResponse } from "../types/weather/ForecastResponse";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const weatherService = new WeatherService();
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse | null>(null);
  const [forecast, setForecast] = useState<ForecastWeatherResponse | null>(
    null,
  );
  useEffect(() => {
    const getCityWeather = async () => {
      try {
        const response = await weatherService.getWeather(name);
        setCurrentWeather(response);
      } catch (error) {}
    };

    const getForecast = async () => {
      try {
        const response = await weatherService.getForecast(name);
        setForecast(response);
      } catch (error) {}
    };

    getForecast();
    getCityWeather();
  }, []);

  return (
    <div id="container">
      <strong>{name}</strong>
      {currentWeather && (
        <CurrentWeatherContainer
          currentTemperature={currentWeather.main.temp}
          maxTemperature={currentWeather.main.temp_max}
          minTemperature={currentWeather.main.temp_min}
          temperatureUnit="F"
        />
      )}
      {forecast && 
      
      <ForecastWeather />
    }
   </div>
  );
};

export default ExploreContainer;
