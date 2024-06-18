import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'

const Hero = () => {
return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Odkryj studenckie kulinaria w Toruniu!</h1>
            <p>Dzięki naszej stronie chcemy udostępnić wszystkim propozycje na zjedzenie czegoś smacznego w mieście Toruń. Nasz wyspecjalizowany zespół kierował się najlepszym stosunkiem cena-jakość.</p>
            <Link to='restaurant-list' smooth={true} offset={-300} duration={500} className='btn'>
                    Odkrywaj
            </Link>
        </div>
    </div>
)
}

export default Hero
