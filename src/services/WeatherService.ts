import { City } from "../types/City";
import axios from "axios";
import { CityService } from "./CityService";

export class WeatherService {
  private API_URL: string;
  constructor() {
    this.API_URL = import.meta.env.VITE_API_URL;
    if (this.API_URL == undefined) {
      throw new Error("API URL not found!");
    }
  }

  async getWeather(cityName: string) {
    const city = await this.getCityByName(cityName);
    try {
      const response = await axios.get(
        `${this.API_URL}/current?lat=${city.lat}&lon=${city.lon}`,
      );
      return response.data;
    } catch (error) {}
  }

  async getForecast(name: string) {
    const city = await this.getCityByName(name);
    try {
      const response = await axios.get(
        `${this.API_URL}/forecast?lat=${city.lat}&lon=${city.lon}`,
      );
      return response.data;
    } catch (error) {}
  }

  private async getCityByName(name: string) {
    const cityService = new CityService();
    const city = await cityService.getCityDetailsByName(name);

    if (city == null) {
      throw new Error("Could not find city");
    }

    return city;
  }
}
