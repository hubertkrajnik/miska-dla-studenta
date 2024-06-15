import React from 'react'
import './RestaurantList.css'  // importujemy plik CSS

const restaurants = [
  {
    name: 'Restauracja Staropolska',
    description: 'Klimatyczne miejsce serwujące tradycyjne polskie potrawy.',
    address: 'ul. Szeroka 32, Toruń',
    mapUrl: 'https://www.google.com/maps?q=ul.+Szeroka+32,+Toruń'
  },
  {
    name: 'Manekin',
    description: 'Popularna naleśnikarnia oferująca szeroki wybór naleśników słodkich i wytrawnych.',
    address: 'ul. Rynek Staromiejski 16, Toruń',
    mapUrl: 'https://www.google.com/maps?q=ul.+Rynek+Staromiejski+16,+Toruń'
  },
  {
    name: 'Pizzeria Piccolo',
    description: 'Mała pizzeria z najlepszymi włoskimi pizzami w mieście.',
    address: 'ul. Królowej Jadwigi 6, Toruń',
    mapUrl: 'https://www.google.com/maps/place/Piccolo/@53.0127183,18.6055939,17z/data=!3m1!4b1!4m6!3m5!1s0x470334e223eac32b:0x422f736cb9788aeb!8m2!3d53.0127151!4d18.6081688!16s%2Fg%2F1tfjpdcw?entry=ttu'
  },
  {
    name: 'Jan Olbracht Browar Staromiejski',
    description: 'Restauracja z własnym browarem, oferująca różnorodne dania i piwa rzemieślnicze.',
    address: 'ul. Szczytna 15, Toruń',
    mapUrl: 'https://www.google.com/maps?q=ul.+Szczytna+15,+Toruń'
  },
  {
    name: 'Restauracja Luizjana',
    description: 'Miejsce z kuchnią kreolską, oferujące niepowtarzalne dania inspirowane Nowym Orleanem.',
    address: 'ul. Most Pauliński 2-10, Toruń',
    mapUrl: 'https://www.google.com/maps?q=ul.+Most+Pauliński+2-10,+Toruń'
  }
]

const RestaurantList = () => {
  return (
    <div className='restaurant-list'>
      {restaurants.map((restaurant, index) => (
        <div key={index} className='restaurant'>
          <h3 className='restaurant-name'>{restaurant.name}</h3>
          <p className='restaurant-description'>{restaurant.description}</p>
          <p className='restaurant-address'><strong>Adres:</strong> {restaurant.address}</p>
          <a href={restaurant.mapUrl} target='_blank' rel='noopener noreferrer' className='btn'>Sprawdź na mapie</a>
        </div>
      ))}
    </div>
  )
}

export default RestaurantList
