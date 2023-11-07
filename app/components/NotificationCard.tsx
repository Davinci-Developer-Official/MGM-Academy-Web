import React from 'react'

interface notification {
  id: number;
  name: string;
  message: string;
}

function NotificationCard(props:any ) {
  const data:notification = props
  
  
  return (
    <div className="collapse collapse-plus text-[#e1b382] bg-[#2d545e]" >
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
         {data.name}
        </div>
        <div className="collapse-content">
        <p className='lg:text-xl'>
        {data.message}
      </p>
        </div>
    </div>
  )
}

export default NotificationCard