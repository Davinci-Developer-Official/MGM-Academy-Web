import React from 'react'

function Progress({valueNo}:any) {
    const progress = JSON.stringify(valueNo);
  return (
    <div className='w-[60%] mx-auto  ' >
    <progress className="progress progress-success w-90 mx-auto    " value={progress} max="100"></progress>
    </div>
  )
}

export default Progress