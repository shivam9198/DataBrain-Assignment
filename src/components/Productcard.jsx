import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
  
    <div className='w-52 bg-white rounded-md overflow-hidden  gap-10'>
            <div className='w-full h-40  bg-sky-200'>
                <img  className=' w-full h-full object-cover object-[center_top]' src={product.image}/>
                </div>
                <div className='w-full p-3'>
                    <h3 className='text-xs text-black font-semibold'>{product.title}</h3>
                    <h3 className='text-xs text-black font-bold'>${product.price}</h3>
                        <button
                             className="bg-blue-500 text-white py-2 px-4 rounded"
                              onClick={() => addToCart(product)}
                                    >
                                Add to Cart
                                   </button>
            
                       </div>
                       
        </div>



      
    
  );
};

export default ProductCard;
