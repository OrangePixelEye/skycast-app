export interface CitySearchResponse {
    name: string;
    state?: string;
    country: string;
    local_names: object;
    lat: number;
    lon: number;
}
