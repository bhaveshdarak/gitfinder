import React from 'react'
import spinner from "../layout/assets/829.gif"
// import spinner from "../layout/assets/1493.gif"
// import spinner from "../layout/assets/1485.gif"
function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img width={180} className='text-center mx-auto' src={spinner} alt="Laoding.."></img>
    </div>
  )
}

export default Spinner