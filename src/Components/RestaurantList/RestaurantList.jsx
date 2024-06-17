import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './RestaurantList.css'
import Manekin from '../../assets/images/Manekin.jpg'
import Piccolo from '../../assets/images/Piccolo.jpg'
import RoyalIndia from '../../assets/images/RoyalIndia.jpg'
import Bartkowscy from '../../assets/images/Bartkowscy.jpg'
import Lotos from '../../assets/images/Lotos.jpg'
import marker from '../../assets/images/marker.png'

const restaurants = [
  {
    name: 'Royal India',
    description: 'Nasz zdecydowany faworyt. Klimatyczne miejsce serwujące tradycyjne dania kuchni Indyjskiej. Najciekawszą propozycją jest lunch serwowany codziennie od poniedziałku do piątku, dodatkowo wraz z aplikacją SKRM można uzyskać 15% zniżki. Byliśmy w tym miejscu niejednokrotnie i za każdym razem zachwycało tak samo. Obowiązkowa pozycja dla każdego kto chce się najeść, ale i spróbować czegoś nietypowego. Specjalność: tikka masala.',
    points: [
      'Jakość jedzenia 10/10',
      'Cena 8/10',
      'Klimat miejsca 10/10',
      'Obsługa 8/10',
      'Lokalizacja 8/10',
      'Ogólna ocena 10/10'
    ],
    address: 'ul. Prosta 19, 87-100 Toruń',
    website: 'https://www.royalindia.pl/',
    coordinates: [53.0123182, 18.6085413],
    imageUrl: RoyalIndia
  },
  {
    name: 'Manekin',
    description: 'Popularna naleśnikarnia oferująca szeroki wybór naleśników słodkich i wytrawnych. Świetne miejsce również na rodzinne posiłki. Jest ona także popularna w innych większych miastach w Polsce. Każdego dnia dobrym wyborem może być naleśnik, a jest ich na tyle dużo w ofercie, iż każdy znajdzie coś dla siebie. Oprócz tego serwowane są makarony, które również zachwycają jakością.',
    points: [
      'Jakość jedzenia 9/10',
      'Cena 8/10',
      'Klimat miejsca 7/10',
      'Obsługa 9/10',
      'Lokalizacja 10/10',
      'Ogólna ocena 9/10'
    ],
    address: 'ul. Rynek Staromiejski 16, 87-100 Toruń',
    website: 'https://manekin.pl/',
    coordinates: [53.0107167, 18.6032653],
    imageUrl: Manekin
  },
  {
    name: 'Pizzeria Piccolo',
    description: 'Mała pizzeria z najlepszymi włoskimi pizzami w mieście. Kultowe już miejsce od lat na mapie Torunia. Barszcz, pizza, a na deser brownie sprawiają, że w bardzo dobrej cenie jesteśmy się w stanie najeść do syta. To jest jedno z miejsc, do którego po prostu trzeba przyjść.',
    points: [
      'Jakość jedzenia 9/10',
      'Cena 10/10',
      'Klimat miejsca 10/10',
      'Obsługa 7/10',
      'Lokalizacja 9/10',
      'Ogólna ocena 10/10'
    ],
    address: 'ul. Prosta 20, 87-100 Toruń',
    website: 'https://piccolo.net.pl/',
    coordinates: [53.0126784, 18.6081288],
    imageUrl: Piccolo
  },
  {
    name: 'Piekarnia Bartkowscy',
    description: 'Nieoczywiste miejsce w naszym zestawieniu. Piekarnia oferująca kanapki z różnorakim mięsem oraz świeżymi warzywami. Oferta jest bardzo szeroka, a w tym bardzo dobrze wypada cenowo. Jest to zdecydowanie świetna pozycja dla tych, którzy cenią sobie jakość dodawanych składników.',
    points: [
      'Jakość jedzenia 10/10',
      'Cena 10/10',
      'Klimat miejsca 7/10',
      'Obsługa 8/10',
      'Lokalizacja 10/10',
      'Ogólna ocena 9/10'
    ],
    address: 'ul. Różana 1, 87-100 Toruń',
    website: 'http://www.piekarniabartkowscy.pl/',
    coordinates: [53.0097995, 18.6027955],
    imageUrl: Bartkowscy
  },
  {
    name: 'Restauracja Lotos',
    description: 'Miejsce z kuchnią chińską, oferujące dania inspirowane Azją. Duże porcje w dobrej cenie, to właśnie cechuje to miejsce. Szeroki wachlarz dań powoduje, że zawsze można znaleźć to na co mamy ochotę.',
    points: [
      'Jakość jedzenia 7/10',
      'Cena 9/10',
      'Klimat miejsca 8/10',
      'Obsługa 6/10',
      'Lokalizacja 8/10',
      'Ogólna ocena 7/10'
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
              <Marker position={restaurant.coordinates} icon={new Icon({iconUrl: marker, iconSize: [32, 32] })} > 
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
