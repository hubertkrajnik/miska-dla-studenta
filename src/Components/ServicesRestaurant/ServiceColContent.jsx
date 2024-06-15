import React from 'react'

const ServiceColContent = ({title,icon,content}) => {
  return (
    <div className='service-col'>
        <h3>{title} {icon}</h3>
        <p>
            {content}
        </p>
    </div>
  )
}

export default ServiceColContent
