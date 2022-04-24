export interface CountryInfo{
    capital: string[];
    latlng: number[];
    flags:{
        png: string
    };
    population:number;
}
export interface WeatherInfo{
    current:{
        temperature: number;
        weather_icons: string[];
        precip: number;
        wind_speed: number
    }
}