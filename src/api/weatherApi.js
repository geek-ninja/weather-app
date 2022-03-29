import axios from 'axios'

const url = 'https://api.openweathermap.org/data/2.5/weather?'
const apiToken = '012edb9fcc6f6f72da4d1be12644f61d'

export const getWeather = (city) => axios.get(`${url}q=${city}&units=metric&appid=${apiToken}`)
