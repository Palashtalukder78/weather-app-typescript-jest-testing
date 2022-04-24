import axios from "axios"


export default class FetchCountry {
    static getWeather = async (country: string)=>{
        return await axios.get(`http://api.weatherstack.com/current?access_key=a724b052c4f44e7184e94b4673d803fa&query=${country}`)
    }
    static getCountry = async(country:string)=>{
        return await axios.get(`https://restcountries.com/v3.1/name/${country}`)
    }
}