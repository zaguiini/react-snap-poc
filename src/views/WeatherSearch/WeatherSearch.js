import React from 'react'
import {object, string} from 'yup'
import qs from 'query-string'
import {Formik} from 'formik';

import useWeatherResults from './lib/use-weather-results'

import WeatherSearchForm from './components/WeatherSearchForm'
import WeatherSearchResults from './components/WeatherSearchResults'


const weatherSearchValidationSchema = object().shape({
  city: string().required(),
})

function WeatherSearch({location, history}) {
  const initialWeatherSearchValues = React.useMemo(() => {
    const values = qs.parse(location.search)
    
    return {
      city: values.city || '',
    }
  }, [location.search])
  
  const [city, setCity] = React.useState(initialWeatherSearchValues.city)
  const [results, setResults] = React.useState(null)

  const handleSubmit = React.useCallback((values) => {
    setCity(values.city)
    
    history.replace({
      search: qs.stringify({
        city: values.city,
      })
    })
  }, [history])

  useWeatherResults({ setResults, city })

  return (
    <div>
      <Formik
        initialValues={initialWeatherSearchValues}
        enableReinitialize
        validationSchema={weatherSearchValidationSchema}
        component={WeatherSearchForm}
        onSubmit={handleSubmit}
      />
      {results && (
        <WeatherSearchResults results={results} />
      )}
    </div>
  )
}

export default WeatherSearch
