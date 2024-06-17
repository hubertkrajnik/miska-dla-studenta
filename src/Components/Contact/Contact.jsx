import React from 'react'
import './Contact.css'
// Message icon
import { FaEnvelope } from 'react-icons/fa'
// Mail icon
import { FaMailBulk } from 'react-icons/fa'
// Phone icon
import { FaPhone } from 'react-icons/fa'
// Location icon
import { FaMapMarkerAlt } from 'react-icons/fa'
// arrow-right icon
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Wyślij wiadomość <FaEnvelope /></h3>
            <p>
                W celu zapewnienia jak najlepszej jakości pragniemy zaprosić Cię do kontaktu z nami. Chcemy, aby nasza strona była jak najlepsza dla jej użytkowników. Cenimy sobie zdanie klientów oraz wszelkie uwagi. Stwórzmy to razem!
            </p>

            <ul>
                <li><FaPhone/> Numer kontaktowy: 575-781-956</li>
                <li><FaMailBulk/> Email: 313107@stud.umk.pl</li>
                <li><FaMailBulk/> Email: 313012@stud.umk.pl</li>
                <li><FaMailBulk/> Email: 313018@stud.umk.pl</li>
                <li><FaMapMarkerAlt/> Adres: Fryderyka Chopina 12/18, 87-100 Toruń</li>
            </ul>
        </div>

        <div className='contact-col'>
            <form>
                <label>Imię</label>
                <input type='text' name='name' placeholder='Wpisz swoje imię' required />

                <label>Numer telefonu</label>
                <input type='tel'  name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" title="Proszę podaj poprawny numer telefonu np. 123-456-789" placeholder='Wpisz swój numer telefonu' required />

                <label>Napisz swoją wiadomość</label>
                <textarea name='message' rows="10" placeholder='Co chcesz nam przekazać?' required />

                <button type='submit' className='btn dark-btn'>Wyślij <FaArrowRight/></button>
            </form>
        </div>
    </div>
  )
}

export default Contact
