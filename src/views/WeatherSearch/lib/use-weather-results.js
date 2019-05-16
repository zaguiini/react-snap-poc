import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast'
const API_KEY = 'd34836055f7471e8e0311939edcee965'

function useWeatherResults({setResults, city}) {
  React.useEffect(() => {
    const controller = new AbortController()

    if(city) {
      const encodedLocation = encodeURIComponent(city)
      const url = `${BASE_URL}?q=${encodedLocation}&appid=${API_KEY}&lang=pt&units=metric`

      axios.get(url).then(({data}) => setResults(data)).catch(() => {
        alert('Failed fetching forecast')
      })
    }

    return () => {
      controller.abort()
    }
  }, [city, setResults])
}

export default useWeatherResults
