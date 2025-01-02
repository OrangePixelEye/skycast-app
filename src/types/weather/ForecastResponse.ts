import {
  Main,
  WeatherDescription,
  Clouds,
  Wind,
  Rain,
  Sys,
  City,
} from './WeatherResponse';

export interface ForecastWeather {
  dt: number;
  main: Main;
  weather: WeatherDescription[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

export interface ForecastWeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastWeather[];
  city: City;
}
