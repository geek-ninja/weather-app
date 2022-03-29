import axios from 'axios'

const url = 'https://api.openweathermap.org/data/2.5/weather?'
const apiToken = 'your token'

export const getWeather = (city) => axios.get(`${url}q=${city}&units=metric&appid=${apiToken}`)
