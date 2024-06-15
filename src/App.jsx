import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Dishes from './Components/Dishes/Dishes'
import Title from './Components/Title/Title'
import RecipeSlider from './Components/RecipeSlider/RecipeSlider'
import Contact from './Components/Contact/Contact'
import ShoppingList from './Components/ShoppingList/ShoppingList'
import ServicesRestaurant from './Components/ServicesRestaurant/ServicesRestaurant'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title title='Our Dishes' subtitle='Popular Dishes' />
        <Dishes />

        <Title title='Our recipes' subtitle='Recipes' />
        <RecipeSlider />

        <Title title='Miejsce na Twój wybór' subtitle='Stwórz własną listę miejsc, które chcesz odwiedzić' />
        <ShoppingList />

        <Title title='Czym się kierowaliśmy?' subtitle='Kryteria' />
        <ServicesRestaurant />

        <Title title='Pozostańmy w kontakcie' subtitle='Skontaktuj się z nami' />
        <Contact />
      </div>
    </div>
  )
}

export default App
