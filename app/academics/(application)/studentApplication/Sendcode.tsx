import React, { useState } from 'react';
import { FaCaretLeft } from 'react-icons/fa';

function Sendcode({ setSlide3,setSlide4, setSlide5 }: any) {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    // Placeholder for sending email logic
    // You need to implement the logic to send the verification code to the provided email
    // You can use fetch or any library to make an API call to your backend to send the email
    // Example:
    await fetch('/api/confirm_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          // Email sent successfully, navigate to the next slide or perform any other action
          setSlide4(false);
          setSlide5(true);
        } else {
          // Handle error appropriately
          console.error('Failed to send verification code');
          // You might want to display an error message to the user
        }
      })
      .catch((error) => {
        console.error('Error sending verification code:', error);
        // Handle error appropriately
        // You might want to display an error message to the user
      });
      await setSlide4(false);
      await setSlide5(true);
  };

  return (
    <div className='w-[60%] mx-auto font-mono  mt-[100px] ' >
      <button className='flex flex-row btn btn-ghost ' onClick={()=>{
          setSlide4(false);
          setSlide3(true);
        }} > <FaCaretLeft size={20} /> back</button>
    <div >
      
      <div className='flex flex-col  '>
        <p className='mb-4'>Verification code will be sent to the email address you provide.</p>
        <input
          type='email'
          className='h-[50px] rounded-lg p-2 border-4 bg-white'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='btn btn-success mt-4 w-[80%] mx-auto' onClick={handleSubmit}>
          Send Verification Code
        </button>
      </div>
    </div>
    </div>
  );
}

export default Sendcode;
