import React from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase for a full refund.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 5-7 business days, depending on your location.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. Additional fees may apply.',
    },
    {
      question: 'How can I track my order?',
      answer: 'You will receive a tracking number via email once your order has shipped.',
    },
    {
      question: 'Can I change or cancel my order?',
      answer: 'You can change or cancel your order within 24 hours of purchase.',
    },
  ];

  return (
    <div className="bg-[#F5E6D3] p-8 min-h-screen">
      <h1 className="text-[#4A3728] text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#E8D6C0] p-4 rounded-lg shadow-md">
            <h2 className="text-[#4A3728] font-semibold text-lg">{faq.question}</h2>
            <p className="text-[#4A3728]">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-[#00A4E4] text-white py-2 px-4 rounded-md hover:bg-[#0085b5] transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FAQPage;
