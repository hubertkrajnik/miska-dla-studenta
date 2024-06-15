import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './RestaurantList.css'
import Lasagne from '../../assets/images/lasagne.jpg'

const restaurants = [
  {
    name: 'Restauracja Staropolska',
    description: 'Klimatyczne miejsce serwujące tradycyjne polskie potrawy.',
    address: 'ul. Szeroka 32, Toruń',
    coordinates: [53.0102, 18.6048],
    imageUrl: Lasagne
  },
  {
    name: 'Manekin',
    description: 'Popularna naleśnikarnia oferująca szeroki wybór naleśników słodkich i wytrawnych.',
    address: 'ul. Rynek Staromiejski 16, Toruń',
    coordinates: [53.0100, 18.6041],
    imageUrl: Lasagne
  },
  {
    name: 'Pizzeria Piccolo',
    description: 'Mała pizzeria z najlepszymi włoskimi pizzami w mieście.',
    address: 'ul. Królowej Jadwigi 6, Toruń',
    coordinates: [53.0096, 18.6053],
    imageUrl: Lasagne
  },
  {
    name: 'Jan Olbracht Browar Staromiejski',
    description: 'Restauracja z własnym browarem, oferująca różnorodne dania i piwa rzemieślnicze.',
    address: 'ul. Szczytna 15, Toruń',
    coordinates: [53.0104, 18.6052],
    imageUrl: Lasagne
  },
  {
    name: 'Restauracja Luizjana',
    description: 'Miejsce z kuchnią kreolską, oferujące niepowtarzalne dania inspirowane Nowym Orleanem.',
    address: 'ul. Most Pauliński 2-10, Toruń',
    coordinates: [53.0091, 18.6070],
    imageUrl: Lasagne
  }
]

const RestaurantList = () => {
  const defaultCenter = [53.0102, 18.6048]
  const defaultZoom = 13

  return (
    <div className='restaurant-list'>
      {restaurants.map((restaurant, index) => (
        <div key={index} className='restaurant'>
          <h3 className='restaurant-name'>{restaurant.name}</h3>
          <img src={restaurant.imageUrl} alt={restaurant.name} className='restaurant-image' />
          <p className='restaurant-description'>{restaurant.description}</p>
          <p className='restaurant-address'><strong>Adres:</strong> {restaurant.address}</p>
          <div className='restaurant-map'>
            <MapContainer center={restaurant.coordinates} zoom={defaultZoom} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={restaurant.coordinates}>
                <Popup>{restaurant.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RestaurantList
