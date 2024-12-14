import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { useContextApi } from '../../context/contextProvider';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {cart} = useContextApi()

    const toggleMenu = ()=>{
        setIsOpen((prev)=>!prev)
    }

  return (
    <>
    <header className='fixed top-0 w-full bg-white px-4 py-2 flex justify-between items-center shadow-lg m-auto md:px-10 z-50'>
       <a href="/">
       <h1 className='font-lufgaBold text-darkBrown text-2xl md:text-3xl'>Beat Farm</h1>
       </a>
        <nav className={`flex flex-col absolute w-full h-screen top-full right-0  bg-white/85 p-7 md:p-0 ${isOpen ? 'block':'hidden md:flex'}  gap-7 md:w-fit md:h-fit md:static md:flex-row items-center backdrop-blur-lg`}>
        <ul className="text-center md:flex gap-6"   onClick={toggleMenu}>
          <li><a href="#beatsid" className="block py-2 hover:text-electricBlue">All Beats</a></li>
          <li><a href="#beatsid" className="block py-2 hover:text-electricBlue">Free Beats</a></li>
          <li><a href="#beatsid" className="block py-2 hover:text-electricBlue">Premium Beats</a></li>
          <li><Link to="/licenseinfo" className="block py-2 hover:text-electricBlue">License Info</Link></li>
          <li><Link to="/faq" className="block py-2 hover:text-electricBlue">FAQ</Link></li>
          <li>
          </li>
        </ul>
        <div className='mt-5 md:mt-0'>
            <Link to='/login' className='underline hover:text-electricBlue font-semibold'>Log In</Link>
            <Link to='/signup' className='bg-electricBlue py-2 rounded px-4 text-white ml-4 hover:bg-blue-500'>Sign Up</Link>
        </div>
        </nav>
        <div className='flex gap-3'>
        <button onClick={toggleMenu} className='md:hidden'>
        {isOpen ? <IoClose className='text-2xl'/> : <RiMenu3Fill className='text-2xl'/>
        }
        </button>
        <div className='relative'>
          <Link to='/cart'>
        <TiShoppingCart className='text-2xl'/>
        <span className='absolute w-4 h-4 -top-1 -right-1 bg-coral rounded-full text-center text-white font-semibold text-xs flex justify-center items-center'><span>{cart}</span></span>
        </Link>
        </div>
        </div>
    </header>
    </>
  )
}

export default Header