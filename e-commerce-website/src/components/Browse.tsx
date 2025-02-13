import React from 'react'

import Model1 from '../assets/model1.jpg'
import Model2 from '../assets/model2.jpg'
import Model3 from '../assets/model3.jpg'
import Model4 from '../assets/model4.jpg'

const Browse = () => {
  return (
    <section>
        <div className='max-w-[1240px] mx-auto px-5 my-[80px]'>
            <div className='bg-[#F2F0F1] sm:px-[50px] py-[70px] rounded-2xl'>
                <h2 className='font-black text-center mb-4 sm:text-5xl text-3xl'>
                    BROWSE BY <br className='sm:hidden' /> DRESS STYLE
                </h2>
                <div className="grid grid-cols-1 grid-rows-12 sm:grid-cols-5 sm:grid-rows-3 sm:gap-4">
                    {/* Primer bloque */}
                    <div className="col-span-2 row-span-4 overflow-hidden max-h-[250px] sm:max-h-[350px] rounded-2xl px-5 py-2 sm:px-0 sm:py-0 relative">
                        <p className='absolute top-5 sm:left-5 left-9 font-semibold text-xl'>Casual</p>
                        <img src={Model1} alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>

                    {/* Segundo bloque */}
                    <div className="col-span-3 row-span-4 overflow-hidden max-h-[250px] sm:max-h-[350px] rounded-2xl px-5 py-2 sm:px-0 sm:py-0 relative">
                        <p className='absolute top-5 sm:left-5 left-9 font-semibold text-xl z-10'>Formal</p>
                        <img src={Model2} alt="" className="w-full h-full object-cover transform scale-x-[-1] rounded-2xl" />
                    </div>

                    {/* Tercer bloque */}
                    <div className="col-span-3 row-span-4 overflow-hidden max-h-[250px] sm:max-h-[350px] rounded-2xl px-5 py-2 sm:px-0 sm:py-0 relative">
                        <p className='absolute top-5 sm:left-5 left-9 font-semibold text-xl'>Party</p>
                        <img src={Model3} alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>

                    {/* Cuarto bloque */}
                    <div className="col-span-2 row-span-4 overflow-hidden max-h-[250px] sm:max-h-[350px] rounded-2xl px-5 py-2 sm:px-0 sm:py-0 relative">
                        <p className='absolute top-5 sm:left-5 left-9 font-semibold text-xl'>Gym</p>
                        <img src={Model4} alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Browse
