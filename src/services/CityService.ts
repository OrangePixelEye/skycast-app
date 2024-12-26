import { City } from "../types/City";
import { storageService } from "./StorageService";

export class CityService {
    getCities(): Promise<Array<City>> {
        return storageService.getItem("cities");
    }

    async appendCity(cityName: string) {
        const cities = await this.getCities();
        cities.push({
            name: cityName
        });
        return storageService.setItem("cities", cities);
    }
}