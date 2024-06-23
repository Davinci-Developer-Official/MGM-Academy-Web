import React from 'react';
import Mapped from './map';
import AddUser from './AddUser';

function Page() {
  return (
    <div className='flex flex-col h-full overflow-y-scroll  ' >
      <Mapped/>
      <AddUser/>   
    </div>
  )
}

export default Page
