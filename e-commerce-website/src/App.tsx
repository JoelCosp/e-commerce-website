import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Tshirt from './assets/tshirt.jpg'
import SkinnyJeans from './assets/skinnyJeans.jpg'
import CheckeredShirt from './assets/checkeredShirt.jpg'
import SleeveStripedTshirt from './assets/sleeveStripedTshirt.jpg'

import VerticalStripedShirt from './assets/verticalStripedShirt.jpg'
import CourageGraphicTshirt from './assets/courageGraphicTshirt.jpg'
import LooseBermuda from './assets/LooseBermuda.jpg'
import FadedSkinny from './assets/fadedSkinny.jpg'

import './App.css'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Products from './components/Products'

function App() {
  
  const products1 = [
    {
      name: "T-shirt with Tape Details",
      rating: "4",
      price: "120",
      img: Tshirt
    },
    {
      name: "Skinny Fit Jeans",
      rating: "3",
      price: "240",
      img: SkinnyJeans
    },
    {
      name: "Checkered Shirt",
      rating: "4",
      price: "180",
      img: CheckeredShirt
    },
    {
      name: "Sleeve Striped T-Shirt",
      rating: "4",
      price: "130",
      img: SleeveStripedTshirt
    }
  ];

  const products2 = [
    {
      name: "Vertical Striped Shirt",
      rating: "5",
      price: "212",
      img: VerticalStripedShirt
    },
    {
      name: "Courage Graphic T-Shirt",
      rating: "4",
      price: "145",
      img: CourageGraphicTshirt
    },
    {
      name: "Loose Fit Bermuda Shorts",
      rating: "3",
      price: "80",
      img: LooseBermuda
    },
    {
      name: "Faded Skinny Jeans",
      rating: "4",
      price: "210",
      img: FadedSkinny
    }
  ];

  return (
    <>
      <Nav />
      <Hero />
      <Products title="NEW ARRIVALS" products={products1} />
      <div className='max-w-[1240px] mx-auto'>
        <hr className='max-w-[250px] sm:max-w-[700px] mx-auto border-gray-300 my-[110px]' />
      </div>
      <Products title="TOP SELLING" products={products2} />
    </>
  )
}

export default App
