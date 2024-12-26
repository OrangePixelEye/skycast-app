import { City } from "../types/City";
import { storageService } from "./StorageService";

export class CityService {
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
}