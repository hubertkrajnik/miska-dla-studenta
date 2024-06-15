import React from 'react'
import './Dishes.css'
import DishesData from './DishesData'


const Dishes = () => {
  return (
    <div className='dishes'>

        {DishesData.map((dish, index) => (
            <div key={index} className='dish'>
                <img src={dish.image} alt={dish.name} />
                    <div className='dish-info'>
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                    </div>
            </div>
        ))}
    </div>
  )
}

export default Dishes
