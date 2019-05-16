import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast'
const API_KEY = 'd34836055f7471e8e0311939edcee965'
const props = '&lang=pt&units=metric'

function useWeatherResults({setResults, city}) {
  React.useEffect(() => {
    const controller = axios.CancelToken.source()

    if(city) {
      const encodedLocation = encodeURIComponent(city)
      const url = `${BASE_URL}?q=${encodedLocation}&appid=${API_KEY}${props}`

      axios.get(url, {
        cancelToken: controller.token,
      })
        .then(({data}) => setResults(data))
        .catch(() => setResults(null))
    }

    return () => {
      controller.cancel()
    }
  }, [city, setResults])
}

export default useWeatherResults
