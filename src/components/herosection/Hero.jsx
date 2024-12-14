import React from 'react'
import Carousel from './Carousel'


const Hero = () => {
   

  return (
    <>
     <div className="bg-cream pt-24 px-1 pb-7">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-3 text-darkBrown">FRESH Packs Hot Off The Ranch</h1>
          <div className="max-w-[600px] m-auto">
           <Carousel />
          </div>
          <a href="#beatsid">
        <button className="mt-4 bg-electricBlue text-white py-2 px-4 rounded hover:bg-blue-400 transition duration-300">
          Check Out All Packs
        </button>
        </a>
      </div>
    </div>
    </>
  )
}

export default Hero