import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import RestaurantList from './Components/RestaurantList/RestaurantList'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import ShoppingList from './Components/ShoppingList/ShoppingList'
import ServicesRestaurant from './Components/ServicesRestaurant/ServicesRestaurant'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='main-container'>
        <Hero />
        <div className='container'>
          <Title title='Restauracje w Toruniu na każdą kieszeń' subtitle='Odkryj najlepsze miejsca do jedzenia w Toruniu' />
          <RestaurantList />
          
          <Title title='Miejsce na Twój wybór' subtitle='Stwórz własną listę miejsc, które chcesz odwiedzić' />
          <ShoppingList />

          <Title title='Czym się kierowaliśmy?' subtitle='Kryteria' />
          <ServicesRestaurant />

          <Title title='Pozostańmy w kontakcie' subtitle='Skontaktuj się z nami' />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
