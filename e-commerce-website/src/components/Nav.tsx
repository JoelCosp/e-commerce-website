import React from 'react'
import { useState } from "react";

import { Menu, Search, ShoppingCart, User, ChevronDown, ShoppingBag, Tag, PackageCheck, Building2  } from 'lucide-react';

const Nav = () => {

    const [nav, setNav] = useState(false);

    function toggleNav()
    {
        setNav(!nav);
    }

  return (
    <nav>
        <div className="mx-auto py-1 bg-black">
            <p className='text-white text-center text-sm md:text-base'>Sign up and get 20% off to your first order. <span className='font-semibold underline'>Sign Up</span></p>
        </div>
        <div className="max-w-[1240px] mx-auto flex justify-between py-5 px-5">
            <div className='flex content-center justify-center items-center'>
                <button onClick={toggleNav}><Menu className='mr-1 block sm:hidden' size={25}/></button>
                <p className='font-black text-3xl mx-1'>React.</p>   
            </div>
            <div className='flex content-center justify-center items-center hidden sm:block'>
                <ul className='flex'>
                    <li className='mx-5 flex font-semibold content-center justify-center items-center hover:cursor-pointer'>Shop <ChevronDown color="#000000" size={20}/></li>
                    <li className='mx-5 font-semibold hover:cursor-pointer'>On Sale</li>
                    <li className='mx-5 font-semibold hover:cursor-pointer'>New Arrivals</li>
                    <li className='mx-5 font-semibold hover:cursor-pointer'>Brands</li>
                </ul>
            </div>
            <div className='flex content-center justify-center items-center'>
                <Search className="mx-1" size={25}/>
                <ShoppingCart className="mx-1" size={25}/>
                <User className="ml-1" size={25}/>
            </div>
        </div>
        {/* LATERAL MENU */}
        <div className={nav ? 'block absolute top-0 bg-white left-0 w-[60%] h-full px-6 pt-[40px] shadow-lg block sm:hidden' : 'hidden'}>
            <div className="w-full flex justify-end">
                <button onClick={toggleNav}><Menu className='block sm:hidden' size={25}/></button>
            </div>
            <ul>
                <li className='flex content-center items-center py-6 border-b border-b-gray-300'><ShoppingBag className="mr-2" size={15}/> Shop</li>
                <li className='flex content-center items-center py-6 border-b border-b-gray-300'><Tag className="mr-2" size={15}/> On Sale</li>
                <li className='flex content-center items-center py-6 border-b border-b-gray-300'><PackageCheck className="mr-2" size={15}/> New Arrivals</li>
                <li className='flex content-center items-center py-6 border-b border-b-gray-300'><Building2 className="mr-2" size={15}/> Brands</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
