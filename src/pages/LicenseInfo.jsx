import React from 'react';

const LicenseInfoPage = () => {
  return (
    <div className="bg-[#F5E6D3] p-8 min-h-screen">
      <h1 className="text-[#4A3728] text-3xl font-bold mb-6">License Information</h1>
      <p className="text-[#4A3728] mb-4">
        Welcome to our License Information page. Below are the details regarding the licenses for our products and services.
      </p>
      
      <h2 className="text-[#4A3728] font-semibold text-2xl mt-6 mb-4">1. General License Terms</h2>
      <p className="text-[#4A3728] mb-4">
        All products purchased through our website are subject to our licensing terms. By purchasing, you agree to adhere to these terms.
      </p>
      
      <h2 className="text-[#4A3728] font-semibold text-2xl mt-6 mb-4">2. Software Licensing</h2>
      <p className="text-[#4A3728] mb-4">
        Software purchased on our platform comes with a single-user license, allowing installation on one device. 
        For multi-user or commercial licenses, please contact our support team.
      </p>
      
      <h2 className="text-[#4A3728] font-semibold text-2xl mt-6 mb-4">3. Product Returns and License Deactivation</h2>
      <p className="text-[#4A3728] mb-4">
        If you choose to return a product, your license will be deactivated. Please refer to our return policy for more details.
      </p>

      <h2 className="text-[#4A3728] font-semibold text-2xl mt-6 mb-4">4. Copyright and Ownership</h2>
      <p className="text-[#4A3728] mb-4">
        All products and content are owned by their respective creators and are protected by copyright laws. Unauthorized use is prohibited.
      </p>

      <h2 className="text-[#4A3728] font-semibold text-2xl mt-6 mb-4">5. Contact Us</h2>
      <p className="text-[#4A3728] mb-4">
        If you have any questions regarding our licensing policies, please reach out to us at:
        <a href="mailto:support@example.com" className="text-[#00A4E4] hover:underline"> support@example.com</a>
      </p>

      <div className="mt-8">
        <button className="bg-[#00A4E4] text-white py-2 px-4 rounded-md hover:bg-[#0085b5] transition">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default LicenseInfoPage;
