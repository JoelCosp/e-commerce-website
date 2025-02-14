import React from 'react'

import Visa from '../assets/visa.jpg'
import Circles from '../assets/circles.jpg'
import PayPal from '../assets/paypal.jpg'
import ApplePay from '../assets/applePay.jpg'
import GooglePay from '../assets/googlePay.jpg'

const Footer = () => {
  return (
    <section className='bg-[#F2F0F1] mt-[200px]'>
        <div className='max-w-[1240px] mx-auto py-5 px-5 pt-[90px]'>
            <div className='max-w-[1240px] mx-auto bg-black flex flex-col sm:flex-row sm:justify-between p-5 sm:py-[30px] sm:px-[50px] rounded-xl mt-[-175px]'>
                <h2 className='font-black sm:text-5xl text-3xl text-white'>STAY UP TO DATE ABOUT <br className='hidden sm:block'/> OUR LATEST OFFERS</h2>
                <div className='flex flex-col max-w-[350px] grid gap-3 mt-5 sm:mt-0'>
                    <input className='bg-white w-full rounded-full p-3 text-black font-semibold' type="email" placeholder='Enter your email' />
                    <button className='bg-white w-full rounded-full p-3 text-black font-semibold'>Subscribe to Newsletter</button>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-[50px]'>
                <ul>
                    <li className='font-semibold'>COMPANY</li>
                    <li className='my-4'>About</li>
                    <li className='my-4'>Features</li>
                    <li className='my-4'>Works</li>
                    <li className='my-4'>Career</li>
                </ul>
                <ul>
                    <li className='font-semibold'>HELP</li>
                    <li className='my-4'>Customer Support</li>
                    <li className='my-4'>Delivery Details</li>
                    <li className='my-4'>Terms & Conditions</li>
                    <li className='my-4'>Privacy Policy</li>
                </ul>
                <ul>
                    <li className='font-semibold'>FAQ</li>
                    <li className='my-4'>Account</li>
                    <li className='my-4'>Manage Deliveries</li>
                    <li className='my-4'>Orders</li>
                    <li className='my-4'>Payments</li>
                </ul>
                <ul>
                    <li className='font-semibold'>RESOURCES</li>
                    <li className='my-4'>Free eBooks</li>
                    <li className='my-4'>Development Tutorial</li>
                    <li className='my-4'>How to - Blog</li>
                    <li className='my-4'>Youtube Playlist</li>
                </ul>
            </div>
            <div>
                <hr className='border-gray-300 m-5'/>
                <div className='flex flex-col items-center justify-center sm:justify-between'>
                    <p className='m-5'>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className='flex flex-wrap'>
                        <img src={Visa} alt="" />
                        <img src={Circles} alt="" />
                        <img src={PayPal} alt="" />
                        <img src={ApplePay} alt="" />
                        <img src={GooglePay} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
