export interface SearchCityData {
    id: Number;
    name: String;
    region: String;
    country: String;
    lat: Number;
    lon: Number;
    url: String;
}

export interface SearchCityDataArray {
    result: SearchCityData[]
}