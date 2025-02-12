import React from 'react'

import { Menu, Search, ShoppingCart, User } from 'lucide-react';

const Nav = () => {
  return (
    <nav className=''>
        <div className="mx-auto py-1 bg-black">
            <p className='text-white text-center text-sm md:text-base'>Sign up and get 20% off to your first order. <span className='font-semibold underline'>Sign Up</span></p>
        </div>
        <div className="max-w-[1240px] mx-auto flex justify-between py-5 px-5">
            <div className='flex content-center justify-center items-center'>
                <Menu className='mr-1' size={25}/>
                <p className='font-black text-3xl mx-1'>React.</p>   
            </div>
            <div className='flex content-center justify-center items-center'>
                <Search className="mx-1" size={25}/>
                <ShoppingCart className="mx-1" size={25}/>
                <User className="ml-1" size={25}/>
            </div>
        </div>
    </nav>
  )
}

export default Nav
