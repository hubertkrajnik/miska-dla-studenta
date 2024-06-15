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
        title: 'Restauracje',
        icon: <FaUtensils />,
        content: 'Stosunek cena-jakość jest dla nas najważniejszy. Pragniemy, aby niedrogim kosztem mogli Państwo skosztować coś smacznego co zapełni głód, ale i wypełni kubki smakowe.'
    },
    {
        title: 'Gdzie jeszcze?',
        icon: <GiFoodTruck />,
        content: 'Czy miejsca, która poznaliście istnieją tylko w Toruniu? Otóż nie do końca! Niektóre z miejsc możecie napotkać na swojej drodze w innych miastach.'
    },
    {
        title: 'Dostawa',
        icon: <AiOutlineShoppingCart />,
        content: 'W czasach ciągłego biegu dobrze jest czasem pozostać w domu i skorzystać z możliwości dostawy, które również są dostępne.'
    },
    {
        title: 'Rezerwacje',
        icon: <AiOutlineCalendar />,
        content: 'Możliwość rezerwacji stolika jest zdecydowanie na plus. Dzięki temu klient ma możliwość spokojnego zaplanowania swojego dnia.'
    }
]

export default Content