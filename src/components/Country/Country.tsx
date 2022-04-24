import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchCountry from '../../fetch/fetch';
import { CountryInfo, WeatherInfo } from '../../model/model';

interface Id{
    country: string
}

const Country = () => {
    const {country} = useParams<Id>();
    const [info, setInfo] = useState<CountryInfo[]>([]);
    const [weather,setWeather] = useState<WeatherInfo>();

    const fetchAllCountry = async()=>{
        const res = await FetchCountry.getCountry(country);
        setInfo(res.data);
    }
    useEffect(()=>{
        fetchAllCountry();
    },[]);

    const fetchWeather = async(capitalCity:string)=>{
        const res= await FetchCountry.getWeather(capitalCity);
        setWeather(res.data)
    }

    return (
        <div data-testid='country' style={{margin:"100px", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <div style={{textAlign:"center"}}>
                {
                    info.map(data=>(
                        <div>
                            <div key={data.latlng[0]+data.latlng[1]}>
                                <p>Population: {data.population}</p>
                                <p>Lat: {data.latlng[0]}</p>
                                <p>Long: {data.latlng[1]}</p>
                                <p>Capital: {data.capital[0]}</p>
                                <img src={data.flags?.png} alt="" />
                            </div>
                            <Button variant='contained' onClick={()=>fetchWeather(info[0].capital[0])}>
                                see Weather
                            </Button>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    weather && (
                        <div>
                            <img src={weather.current.weather_icons[0]} alt="" />
                            <p>Teperature: {weather.current.temperature}</p>
                            <p>Wind Speed: {weather.current.wind_speed}</p>
                            <p>Precip: {weather.current.precip}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Country;