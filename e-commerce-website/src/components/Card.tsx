import React from 'react'

import Tshirt from '../assets/tshirt.jpg'
import { Star } from 'lucide-react';

interface CardProps {
    product: {
        name: string;
        rating: string;
        price: string;
        img: string;
    };
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className='flex justify-center flex-col p-5'>
      <img className='sm:max-w-[300px] mb-4' src={product.img} alt="/" />
      <div className='overflow-hidden'>
        <p className='mb-1 font-semibold whitespace-nowrap'>{product.name}</p>
      </div>
      <div className='flex mb-1'>
        <Star className='text-yellow-500' size={14} fill="currentColor"/>
        <Star className='text-yellow-500' size={14} fill="currentColor"/>
        <Star className='text-yellow-500' size={14} fill="currentColor"/>
        <Star className='text-yellow-500' size={14} fill="currentColor"/>
        <Star className='text-yellow-500' size={14} fill="currentColor"/>
      </div>
      <p className='font-bold'>${product.price}</p>
    </div>
  )
}

export default Card
