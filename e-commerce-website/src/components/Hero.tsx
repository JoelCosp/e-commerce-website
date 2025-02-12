import React from 'react'
import HeroImg from '../assets/hero_img.jpg'
import Versace from '../assets/versace.png'
import Zara from '../assets/zara.png'
import Gucci from '../assets/gucci.png'
import Prada from '../assets/prada.png'
import CalvinKlein from '../assets/calvin.png'

const Hero = () => {
  return (
    <main>
        <div className='max-w-[1240px] mx-auto py-5 px-5 sm:p-20 bg-[#F2F0F1] grid grid-cols-1 sm:grid-cols-2'>
            <div className='flex flex-col items-center justify-center'>
              <div className='sm:max-w-[580px]'>
                  <h1 className='font-black text-5xl leading-10 uppercase'>Find Clothes <br /> that matches <br /> your style</h1>
                  <p className='mt-4'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                  <button className='mt-4 bg-black text-white w-full rounded-full p-3 sm:max-w-[220px]'>Shop Now</button>
              </div>
              <div className='flex justify-between max-w-[580px] mt-4'>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-3xl'>200+</h3>
                  <p>International Brands</p>
                </div>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-3xl'>2.000+</h3>
                  <p>High-Quality Products</p>
                </div>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-3xl'>9.000+</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
            <div>
              <img src={HeroImg} alt="" />
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto bg-black p-5 sm:px-20 sm:py-10'>
          <div className="flex flex-wrap justify-center  sm:justify-between">
            <img className='max-w-[160px] max-h-[40px] p-1' src={Versace} alt="" />
            <img className='max-w-[160px] max-h-[40px] p-1' src={Zara} alt="" />
            <img className='max-w-[160px] max-h-[40px] p-1' src={Gucci} alt="" />
            <img className='max-w-[160px] max-h-[40px] p-1' src={Prada} alt="" />
            <img className='max-w-[160px] max-h-[40px] p-1' src={CalvinKlein} alt="" />
          </div>
        </div>
    </main>
  )
}

export default Hero
