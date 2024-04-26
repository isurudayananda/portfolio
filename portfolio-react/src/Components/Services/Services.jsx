import React from 'react'
import './services.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
    </div>
  )
}

export default services