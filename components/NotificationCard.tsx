import React from 'react'

interface notification {
  id: number;
  name: string;
  message: string;
}

function NotificationCard(props:any ) {
  const data:notification = props
  return (
    <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Our Final Say
        </div>
        <div className="collapse-content">
        <p className='lg:text-xl'>
        In conclusion, the MGM Institute of Gender and Women Empowerment is a
        vanguard in the ongoing fight for gender equality and women's
        empowerment. Its dedication to education, research, advocacy, and policy
        development is instrumental in reshaping societies for a brighter, more
        equitable future.
      </p>
        </div>
    </div>
  )
}

export default NotificationCard