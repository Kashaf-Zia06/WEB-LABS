import React from 'react'

const ProductCard = ({name,price,imageSrc}) => {
  return (
    <div className='bg-gray-400 border-2 border-black rounded-2xl flex flex-col justify-center items-center gap-5 p-4 w-48'> 
        <img className='w-32 h-32'
         src={imageSrc} alt="productImage" />
        <p className='text-2xl font-bold'>{name}</p>
        <p className='text-200'>Price: {price}</p>
    </div>
  )
}

export default ProductCard
