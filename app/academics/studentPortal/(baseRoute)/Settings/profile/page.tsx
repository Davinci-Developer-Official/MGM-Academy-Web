
import React, { FormEvent } from 'react'
import ba from "../../../../../../public/profile/user.png"
import Image from 'next/image'
import { FaUpload } from 'react-icons/fa'
//import get from '@/app/api/get'

import Form from "./form"
import { fetchDataById } from '@/app/api/Fetch/get'

async function page() {
  const url = "https://65644addceac41c0761dd04d.mockapi.io/users/api/profile";//global api url
    const index = 3 //
  const profiles = await  fetchDataById(url,index);
  //data sets for fetching data
  
  const localApi = "/api/profile";
  //get data from api
  
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <Form url={url} index={index} profiles={profiles} />
  )
}

export default page