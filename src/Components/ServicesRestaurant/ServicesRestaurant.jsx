import React from 'react'
import './ServicesRestaurant.css'

import Content from './Content'
import ServiceColContent from './ServiceColContent'

const ServicesRestaurant = () => {
  return (
    <div className='services-restaurant'>
        <div className='services-container'>
            <ServiceColContent {...Content[0]}/>
            <ServiceColContent {...Content[1]}/>
        </div>

        <div className='services-container'>
            <ServiceColContent {...Content[2]}/>
            <ServiceColContent {...Content[3]}/>
        </div>
    </div>
  )
}

export default ServicesRestaurant
