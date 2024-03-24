"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import b from "@/public/empowerment/11.png"

//user details
interface User {
    avatar: any;
    first_name: any;
    middle_name: any;
    last_name: any;
    username: any;
    email: any;
    gender: any;
    nationality: any;
    residence: any;
    phone_number: any;
    date_of_birth: any;
    exposure: any;
    password: any;
};

function Remodel() {
    const [user, setUser] = useState<User>({
        avatar: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        username: '',
        email: '',
        gender: '',
        nationality: '',
        residence: '',
        phone_number:'',
        date_of_birth: '',
        exposure:'',
        password: ''
      });
  return (
    <div>
        <div className='w-[70%] mx-auto h-screen  ' >
          <div className="join join-vertical w-full mt-8 ">
            <div>
              <div>
                <Image src={ b } alt="b" width={300} height={300} />
              </div>
            </div>
      {/*personal details*/}
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
      Personal details
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      verify email
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      setup password
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Login to created account
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
</div> 
        </div>
    </div>
  )
}

export default Remodel