import React from 'react'
import h from '../assets/h.jpg'

const Header = () => {
  return (
    <div className='header'>
      <img src={h} width="30px" alt="img logo" />
      <span>Header</span>
    </div>
  )
}

export default Header
