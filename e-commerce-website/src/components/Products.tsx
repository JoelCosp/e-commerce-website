import React from 'react'
import Card from './Card'

interface Product {
    name: string;
    rating: string;
    price: string;
    img: string;
}
  
interface ProductsProps {
    title: string;
    products: Product[];  // Un array de productos
}

const Products: React.FC<ProductsProps> = ({ title, products }) => {
  return (
    <section>
        <h2 className='font-bold text-center mb-4 mt-[50px] sm:text-5xl text-3xl'>{ title }</h2>
        <div className='max-w-[1240px] mx-auto flex justify-between grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3'>
            {products.map((product) => (
            <Card key={product.name} product={product} />
            ))}
        </div>
        <div className='max-w-[1240px] mx-auto flex justify-center px-5'>
            <button className='mt-4 w-full rounded-full p-3 sm:max-w-[220px] border-solid border-1 font-semibold hover:text-white hover:bg-black hover:cursor-pointer'>View All</button>
        </div>
    </section>
  )
}

export default Products
