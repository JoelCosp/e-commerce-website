import React from 'react'

const Hero = () => {
  return (
    <main>
        <div className='max-w-[1240px] mx-auto py-5 px-5 bg-red-200'>
            <div>
                <h1 className='font-black text-3xl leading-7 uppercase'>Find Clothes that matches your style</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className='bg-black text-white w-full rounded-full p-3'>Shop Now</button>
            </div>
        </div>
    </main>
  )
}

export default Hero
