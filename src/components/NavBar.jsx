import React, {useState} from 'react';
import {logo,menu,close} from '../assets';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  return (
    <nav className={`  w-full flex items-center py-2 px-[30px] fixed top-0 z-20 bg-primary bg-[#F8F7F3]/75`}>
      <div className='w-full flex justify-between items-center mx-auto'>
      
      <motion.button
      
      className="flex items-center gap-2"
      onClick={() => {
        window.scrollTo(
          {
            top: 0,
            behavior: 'smooth'
          }
          
          );
      }}
        >
        <img src={logo} alt="logo" className=" h-6 "/>
        
        
      
      </motion.button>
          <div className='flex flex-row gap-1 '>
            <SecondaryButton 
            value="Contact Sales"
            />
                  <div className='list-none hidden sm:flex flex-row gap-1'>
            <SecondaryButton 
            value="Login"
            border={true}
            path="/login"
            />
            <PrimaryButton
            value="Sign Up"
            path="/signup"
            /> 
        </div>
      <div className="sm:hidden flex flex-1
      justify-end items-center">
            <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] 
            object-contain cursor-pointer'
            onClick={() =>
              setToggle(!toggle)
            }
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 w-l  z-10 rounded-xl bg-[#F8F7F3]/90 drop-shadow-2xl `}>
            
            <div className='list-none flex flex-row gap-1 justify-end'>
          
            <SecondaryButton 
            value="Login"
            border={true}
            path="/login"
            />
            
            <PrimaryButton
            value="Sign Up"
            path="/signup"
            />
        </div>
        </div>
      </div>
      </div>
      </div>
      
    </nav>
  )
}
export default Navbar