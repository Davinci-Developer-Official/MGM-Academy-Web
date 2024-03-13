import React, { useEffect, useState } from 'react';
import { FaCaretLeft } from 'react-icons/fa';
import axios from "axios"
import Main from "@/app/components/SendMail"

function Sendcode({ setSlide3,setSlide4, setSlide5 }: any) {
  const [email, setEmail] = useState('');
  const[verificationCode,setVerificationCode]=useState("")
  const[value,setValue]=useState("")
  const[error,setError]=useState(false)

  //verification code generator
  function generateRandomNumber() {
    // Generate a random number between 100,000 (inclusive) and 999,999 (inclusive)
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }
  //onsubmit function;
  const handleSubmit = async () => {
  //send verification email;
    await Main({
      email:JSON.stringify(email),
      code:JSON.stringify(generateRandomNumber())
    }).then((code)=>{
      //alert(email+number);      
      //alert(code);
      localStorage.setItem("code",code)
      if(code==null){
        setSlide5(false);
        setSlide4(true);      
        alert("no access");
        setError(true);
      }else{
        const v =localStorage.getItem("code");
        alert(v)
        setSlide4(false);
       setSlide5(true);
      }
    }).catch((error:any)=>{
      console.error(error)
     
    })

    //alert(email)
    //  await setSlide4(false);
    //  await setSlide5(true);
  };
  useEffect(()=>{
    
  },[value])
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
          placeholder={error ? `🚫 enter email to proceed` : '📧  Enter email'}
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