import React from 'react'
// Restaurant icon
import { FaUtensils } from 'react-icons/fa'
//Food icon
import { GiFoodTruck } from "react-icons/gi";
//Delivery icon
import { AiOutlineShoppingCart } from "react-icons/ai";
// Reservation icon
import { AiOutlineCalendar } from "react-icons/ai";

const Content = [
    {
        title: 'Cena, a jakość',
        icon: <FaUtensils />,
        content: 'Stosunek cena-jakość jest dla nas najważniejszy. Pragniemy, aby niedrogim kosztem można było skosztować coś smacznego co zapełni głód, ale i wypełni kubki smakowe.'
    },
    {
        title: 'Gdzie jeszcze?',
        icon: <GiFoodTruck />,
        content: 'Czy miejsca, która poznaliście istnieją tylko w Toruniu? Otóż nie do końca! Niektóre z miejsc możecie napotkać na swojej drodze w innych miastach.'
    },
    {
        title: 'Obsługa',
        icon: <AiOutlineShoppingCart />,
        content: 'Wzajemna życzliwość potrafi zawsze umilić nastrój. Dobrze jest czuć się w danym miejscu komfortowo i mile widzianym.'
    },
    {
        title: 'Rezerwacje',
        icon: <AiOutlineCalendar />,
        content: 'Możliwość rezerwacji stolika jest zdecydowanie na plus. Dzięki temu klient ma możliwość spokojnego zaplanowania swojego dnia.'
    }
]

export default Content