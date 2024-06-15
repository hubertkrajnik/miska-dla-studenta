import React from 'react'
import './Navbar.css'
import Logo from '../../assets/images/fork.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'
import Links from './Links'
//Menu icon
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
   const [darkModeNavbar, setDarkModeNavbar] = useState(false)
   const [showMenu, setShowMenu] = useState(false)
   const [selecteMenuItem, setSelectedMenuItem] = useState(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 20) {
                setDarkModeNavbar(true)
            } else {
                setDarkModeNavbar(false)
            }
        })
        
    }, [])

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleMenuItemClick = (index) => {
        setSelectedMenuItem(index)
        setShowMenu(false)
    }

  return (
    <nav className={`container ${darkModeNavbar ? 'dark-navbar' : ''}`}>
        
        <div className='left-section'>
            <img src={Logo} alt='logo' className='logo' />
            <h2>Miska dla studenta</h2>
        </div>

        <div className='right-section'>
            <ul className={showMenu?'active':''}>
                {Links.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={link.to}
                            smooth={true}
                            offset={link.offset}
                            duration={link.duration}
                            className={link.className}
                            onClick={() => handleMenuItemClick(index)}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        
        <FaBars className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
