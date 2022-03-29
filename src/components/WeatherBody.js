import React, { useEffect, useState } from 'react'
import {fetchWeather, getWeatherImg} from '../actions/weatherAction'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import './weatherbody.css'
import SearchIcon from '@material-ui/icons/Search';
import { CircularProgress } from '@material-ui/core';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';

function WeatherBody() {

    const [city,setCity] = useState('Pune')
    const [cityWeather,setCityWeather] = useState(undefined)
    const [cityWeatherImg,setCityWeatherImg] = useState('')
    const [bgColor,setBgColor] = useState('#6DF9E5')
    const [textColor,setTextColor] = useState('#232855')
    
    
    useEffect(() => {
        fetchWeather(city)
        .then((data) => {
            setCityWeather(data)
            setCityWeatherImg(getWeatherImg(data.weather[0].icon).img)
            setBgColor(getWeatherImg(data.weather[0].icon).color)
            setTextColor(getWeatherImg(data.weather[0].icon).textColor)
        })
    }, [city])

  return (
    <div className='weather_body' style={{backgroundColor:bgColor,color:textColor}}>
        <div className='weather_body_search'>
            <div className='weather_body_search_input'>
                <SearchIcon/>
                <input type='text' placeholder='city name' style={{color:textColor}} value={city} onChange = {(e) => setCity(e.target.value)}/>
            </div>
            <div className='weather_body_header'>
                <div className='weather_body_header_img'><LocationOnIcon fontSize='large'/></div>&nbsp;&nbsp;
                <div className='weather_body_header_city_name'>{cityWeather ? <><h2>{city}</h2> <p>{cityWeather.sys.country}</p></> : <div className='weather_body_header_city_name_loading'> <h2>search your place</h2> &nbsp;&nbsp; <CircularProgress color='inherit' size={20}/></div>}</div>
            </div>
        </div>
        {
            cityWeather ? 
            <div className='weather_body_info'>
                <div className='weather_body_info_img'>
                    <img src={cityWeatherImg} alt = 'weather img'/>
                    <div className='weather_body_info_img_details'>
                        <p>{cityWeather.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} alt = 'weather icon'/>
                    </div>
                </div>
                <div className='weather_body_info_temp'>
                    <div className='weather_body_info_temp_avg'>
                        <span>{cityWeather.main.temp}°c</span>
                    </div>
                    <div className='weather_body_info_temp_details'>
                        <div className='weather_body_info_temp_wind'>
                            <WbCloudyIcon/>&nbsp;
                            <h2>{cityWeather.wind.speed}m/sec</h2>
                        </div>
                        <div className='weather_body_info_temp_humid'>
                            <InvertColorsIcon/>&nbsp;
                            <h2>{cityWeather.main.humidity}%</h2>
                        </div>
                    </div>
                </div>
            </div>
        :
        <div className='weather_body_error'>
            <h1>Result not found</h1>
        </div>
        }
    </div>
  )
}

export default WeatherBody