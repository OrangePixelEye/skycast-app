import { storageService } from "./StorageService";

export class CityService {
    constructor(){

    }
    
    getCities() {
        return storageService.getItem("cities");
    }

    appendCity(city: string) {
        return storageService.setItem("cities", city);
    }
}