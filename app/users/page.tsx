import React from 'react';
import Mapped from './map';
import AddUser from './AddUser';

function Page() {
  return (
    <div className='flex flex-col h-screen  ' >
      <AddUser/>
      <Mapped/>
    </div>
  )
}

export default Page
