import axios from "axios";
import { City } from "../types/City";
import { storageService } from "./StorageService";
import { CitySearchResponse } from "../types/ApiResponse";

export class CityService {
    private API_URL: string;
    constructor(){
        this.API_URL = import.meta.env.VITE_API_URL;
        if(this.API_URL == undefined) {
            throw new Error("API URL not found!");
        }
    }
    getCities(): Promise<Array<City>> {
        return storageService.getItem("cities");
    }

    async appendCity(data: {
        name: string,
        country: string,
        state: string
    }) {
        const cities = await this.getCities();
        cities.push(data);
        return storageService.setItem("cities", cities);
    }

    async searchCities(keyword: string): Promise<Array<CitySearchResponse>> {
        try{
            const response = await axios.get(`${this.API_URL}/geolocation?city=${keyword}`);
            return response as Array<CitySearchResponse>;
        } catch(e) {
            return  []
        }
    }
}