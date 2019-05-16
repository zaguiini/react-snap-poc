import React from 'react'
import {Form, Field} from 'formik';


function WeatherSearchForm({touched, errors}) {
  return (
    <Form>
      <div>
        <Field as="input" name="city" placeholder="Input the city" />
        {touched.city && errors.city}
      </div>
      <input type="submit" />
    </Form>
  )
}

export default WeatherSearchForm
