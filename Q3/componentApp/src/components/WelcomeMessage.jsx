import React from 'react'

let date=new Date();

const WelcomeMessage = () => {
  return (
    <div className='welcome'>
      <h3>Welcome! </h3>
      <p> Date: <span>{date.toDateString()}</span> </p>
      
    </div>
  )
}

export default WelcomeMessage
