import React from 'react'

function WeatherSearchResults({results}) {
  const [item] = results.list

  return (
    <p>
      Weather for {item.dt_txt} at {results.city.name}: {item.main.temp} degrees
    </p>
  )
}

export default WeatherSearchResults
