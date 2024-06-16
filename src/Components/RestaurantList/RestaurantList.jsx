import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './RestaurantList.css'
import Manekin from '../../assets/images/Manekin.jpg'
import Piccolo from '../../assets/images/Piccolo.jpg'
import RoyalIndia from '../../assets/images/RoyalIndia.jpg'
import Bartkowscy from '../../assets/images/Bartkowscy.jpg'
import Lotos from '../../assets/images/Lotos.jpg'

const restaurants = [
  {
    name: 'Royal India',
    description: 'Klimatyczne miejsce serwujące tradycyjne dania kuchni Indyjskiej.',
    points: [
      'Tradycyjne dania kuchni Indyjskiej.',
      'Specjalność: Butter Chicken.',
      'Przyjazna atmosfera.'
    ],
    address: 'ul. Prosta 19, 87-100 Toruń',
    website: 'https://www.royalindia.pl/',
    coordinates: [53.0123182, 18.6085413],
    imageUrl: RoyalIndia
  },
  {
    name: 'Manekin',
    description: 'Popularna naleśnikarnia oferująca szeroki wybór naleśników słodkich i wytrawnych.',
    points: [
      'Szeroki wybór naleśników.',
      'Świetne miejsce na rodzinne posiłki.',
      'Centralna lokalizacja.'
    ],
    address: 'ul. Rynek Staromiejski 16, 87-100 Toruń',
    website: 'https://manekin.pl/',
    coordinates: [53.0107167, 18.6032653],
    imageUrl: Manekin
  },
  {
    name: 'Pizzeria Piccolo',
    description: 'Mała pizzeria z najlepszymi włoskimi pizzami w mieście.',
    points: [
      'Autentyczne włoskie pizze.',
      'Przytulna atmosfera.',
      'Świeże składniki.'
    ],
    address: 'ul. Prosta 20, 87-100 Toruń',
    website: 'https://piccolo.net.pl/',
    coordinates: [53.0126784, 18.6081288],
    imageUrl: Piccolo
  },
  {
    name: 'Piekarnia Bartkowscy',
    description: 'Piekarnia oferująca kanapki z różnorakim mięsem oraz świeżymi warzywami.',
    points: [
      'Świeże pieczywo.',
      'Pyszne kanapki.',
      'Miła obsługa.'
    ],
    address: 'ul. Różana 1, 87-100 Toruń',
    website: 'http://www.piekarniabartkowscy.pl/',
    coordinates: [53.0097995, 18.6027955],
    imageUrl: Bartkowscy
  },
  {
    name: 'Restauracja Lotos',
    description: 'Miejsce z kuchnią chińską, oferujące niepowtarzalne dania inspirowane Azją.',
    points: [
      'Autentyczna kuchnia chińska.',
      'Wyjątkowe smaki.',
      'Przyjemna atmosfera.'
    ],
    address: 'ul. Strumykowa 16, 87-100 Toruń',
    website: 'https://lotos-torun.pl/',
    coordinates: [53.0115300, 18.6074495],
    imageUrl: Lotos
  }
]

const RestaurantList = () => {
  const defaultCenter = [53.0102, 18.6048]
  const defaultZoom = 15

  return (
    <div className='restaurant-list'>
      {restaurants.map((restaurant, index) => (
        <div key={index} className='restaurant'>
          <h3 className='restaurant-name'>{restaurant.name}</h3>
          <img src={restaurant.imageUrl} alt={restaurant.name} className='restaurant-image' />
          <p className='restaurant-description'>{restaurant.description}</p>
          <ul className='restaurant-points'>
            {restaurant.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className='restaurant-address'><strong>Adres:</strong> {restaurant.address}</p>
          <p className='restaurant-website'><strong>Strona internetowa:</strong> <a href={restaurant.website} target='_blank' rel='noopener noreferrer'>{restaurant.website}</a></p>
          <div className='restaurant-map'>
            <MapContainer center={restaurant.coordinates} zoom={defaultZoom} scrollWheelZoom={true} style={{ height: '400px', width: '100%' }}>
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
