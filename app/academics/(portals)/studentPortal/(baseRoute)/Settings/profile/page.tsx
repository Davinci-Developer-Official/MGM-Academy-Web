'use client'
import React, { FormEvent, useEffect, useState } from 'react';
import Form from './form';
import { FaUpload } from 'react-icons/fa';

 function Page() {
  const url = 'https://65644addceac41c0761dd04d.mockapi.io/users/api/profile';
  const index = 3;
  const [profiles, setProfiles] = useState([]);

  // Fetch data from API
  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []);

  // Form submission handler
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });
      // Handle response if necessary
      const responseData = await response.json();
      console.log('Form submission response:', responseData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <Form
      url={url}
      index={index}
      profiles={profiles} // Make sure profiles is an array
      onSubmit={onSubmit}
    />
  );
}

export default Page;
