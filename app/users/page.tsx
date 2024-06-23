import React from 'react';
import Mapped from './map';
import AddUser from './AddUser';
import Login from './Login';

function Page() {
  return (
    <div className='flex flex-col h-full overflow-y-scroll  ' >
      {/*<Mapped/>*/}
      <AddUser/>
      <Login/>   
    </div>
  )
}

export default Page
