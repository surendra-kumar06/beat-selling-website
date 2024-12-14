import React from 'react';
import { useContextApi } from '../../context/contextProvider.jsx'
import allbeats from '../../assets/beats_library/allbeats.js'
import { Link } from 'react-router-dom';

const Cart = () => {
  const {items,removeToCart} = useContextApi();
  const products = allbeats.filter((product)=>items.includes(product.id))

  return (
    <div className="min-h-screen bg-[#F5E6D3] p-6">
      <h1 className="text-3xl font-bold text-[#4A3728] mb-6">Shopping Cart</h1>
      <div className="bg-[#E8D6C0] rounded-lg shadow-lg p-4 space-y-7">
        {products.length == 0 ? "Let's buy something ": products.map((beat) => (
          <div key={beat.id} className="flex  items-center border-b border-[#4A3728] py-2  flex-col md:flex-row gap-4 md:px-10 md:justify-between">
            <div className='flex items-center gap-5'>
              <div>
              <Link to={`/artist/${beat.id}`}>
      <div className=' h-28 rounded-md'>
        <img src={beat.logo} className='h-full object-cover rounded-md' alt="" />
      </div>
      </Link>
              </div>
              <div>
              <h2 className="text-lg text-[#4A3728]">{beat.beatName}</h2>
              <p className="text-[#4A3728]">Price: ${beat.price}</p>
              </div>
            </div>
            <div>
              <button className="bg-[#00A4E4] text-white py-1 px-3 rounded hover:bg-[#0089b4]" onClick={()=>removeToCart(beat.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link to={products.length == 0 ? '/': '/checkout'}>
        <button className="bg-[#FF6B5B] text-white py-2 px-4 rounded hover:bg-[#d85a4a]">
          {products.length == 0 ? 'Buy Now': 'Checkout'}
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
