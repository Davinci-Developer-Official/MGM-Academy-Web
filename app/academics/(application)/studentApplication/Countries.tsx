import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({setcitizenship,citizenship}:any) {
  const [value, setValue] = useState('')
  const options:any = useMemo(() => countryList().getData().map(country => ({
    label: country.label,
    value: country.value
  })), []);
  

  const changeHandler = (value:any) => {
    setValue(value);
    setcitizenship({nationality:value.label});
    //alert(citizenship)
    //alert(JSON.stringify(value.label))
  }
  

  return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector