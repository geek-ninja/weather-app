import * as api from '../api/weatherApi'
import clearDay from '../static/img/clearDay.png'
import clearNight from '../static/img/clearNight.webp'
import fewCloudDay from '../static/img/fewCloudDay.png'
import fewCloudNight from '../static/img/fewCloudNight.png'
import cloud from '../static/img/cloud.png'
import brokenCloud from '../static/img/brokenCloud.png'
import shower from '../static/img/shower.png'
import rainDay from '../static/img/rainDay.png'
import rainNight from '../static/img/rainNight.png'
import thunderDay from '../static/img/thunderDay.png'
import thunderNight from '../static/img/thunderNight.png'
import snow from '../static/img/snow.png'
import mist from '../static/img/mist.png'


export const fetchWeather = async (city) => {
    try {
        const {data} = await api.getWeather(city)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getWeatherImg = (iconCode) => {
    switch (iconCode) {
        case '01d':
            return {img:clearDay,color:'#FCCC88',textColor:'#232855'}
        case '01n':
            return {img:clearNight,color:'#061418',textColor:'#ffff'}
        case '02d':
            return {img:fewCloudDay,color:'#6EFAE6',textColor:'#232855'}
        case '02n':
            return {img:fewCloudNight,color:'#061418',textColor:'#ffff'}
        case '03d':
            return {img:cloud,color:'#75E0FE',textColor:'#232855'}
        case '03n':
            return {img:cloud,color:'#061418',textColor:'#ffff'}
        case '04d':
            return {img:brokenCloud,color:'#75E0FE',textColor:'#232855'}
        case '04n':
            return {img:brokenCloud,color:'#061418',textColor:'#ffff'}
        case '09d':
            return {img:shower,color:'#3B82B2',textColor:'#232855'}
        case '09n':
            return {img:shower,color:'#061418',textColor:'#ffff'}
        case '10d':
            return {img:rainDay,color:'#2488ca',textColor:'#232855'}
        case '10n':
            return {img:rainNight,color:'#102f3d',textColor:'#ffff'}
        case '11d':
            return {img:thunderDay,color:'#5BC8FA',textColor:'#232855'}
        case '11n':
            return {img:thunderNight,color:'#102f3d',textColor:'#ffff'}
        case '13d':
            return {img:snow,color:'#5BC8FA',textColor:'#232855'}
        case '13n':
            return {img:snow,color:'#102f3d',textColor:'#ffff'}
        case '50d':
            return {img:mist,color:'#5BC8FA',textColor:'#232855'}
        case '50n':
            return {img:mist,color:'#102f3d',textColor:'#ffff'}
        default:
            return {img:'https://openweathermap.org/img/wn/02d@2x.png',color:'#6DF9E5',textColor:'#232855'}
    }
}