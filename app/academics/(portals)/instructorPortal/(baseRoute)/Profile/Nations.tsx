'use client';
import React, { useState, useMemo, useEffect } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Nations({setUser,user}:any) {
  const [value, setValue] = useState('')
  const options:any = useMemo(() => countryList().getData().map(country => ({
    label: country.label,
    value: country.value
  })), []);
  

const[placeholder,setplaceholder]=useState("");
  const changeHandler = (value:any) => {
    setValue(value);
   
    setUser((prevData:any)=>({...prevData,nationality:value.label}));
    //sessionStorage.setItem("s-nationality",value.label)
    //alert(citizenship)
    //alert(JSON.stringify(value.label))
    //alert(user.nationality)
    
  }
    useEffect(()=>{},[user])
  
  
  return <Select options={options} value={value} onChange={changeHandler} />
}

export default Nations;