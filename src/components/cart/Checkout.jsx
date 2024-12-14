import React from 'react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-[#F5E6D3] p-6">
      <h1 className="text-3xl font-bold text-[#4A3728] mb-6">Checkout</h1>
      
      <div className="bg-[#E8D6C0] rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-[#4A3728] mb-4">Billing Information</h2>
        <form>
          <div className="mb-4">
            <label className="block text-[#4A3728] mb-2">Full Name</label>
            <input type="text" className="w-full p-2 border border-[#4A3728] rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-[#4A3728] mb-2">Email</label>
            <input type="email" className="w-full p-2 border border-[#4A3728] rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-[#4A3728] mb-2">Address</label>
            <input type="text" className="w-full p-2 border border-[#4A3728] rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-[#4A3728] mb-2">City</label>
            <input type="text" className="w-full p-2 border border-[#4A3728] rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-[#4A3728] mb-2">Zip Code</label>
            <input type="text" className="w-full p-2 border border-[#4A3728] rounded" />
          </div>
        </form>
      </div>

      <div className="bg-[#E8D6C0] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-[#4A3728] mb-4">Payment Information</h2>
        <form>
          <div className="mb-4">
            <label className="block text-[#4A3728] mb-2">Card Number</label>
            <input type="text" className="w-full p-2 border border-[#4A3728] rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-[#4A3728] mb-2">Expiration Date</label>
            <input type="text" className="w-full p-2 border border-[#4A3728] rounded" placeholder="MM/YY" />
          </div>
          <div className="mb-4">
            <label className="block text-[#4A3728] mb-2">CVV</label>
            <input type="text" className="w-full p-2 border border-[#4A3728] rounded" />
          </div>
        </form>
      </div>

      <div className="mt-6">
        <button className="bg-[#00A4E4] text-white py-2 px-4 rounded hover:bg-[#0089b4]">
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default Checkout;
