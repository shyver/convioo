import React from 'react'
import { logoWhite } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black w-full h-[459px] rounded-t-[50px] p-20 flex flex-row gap-20'>
        <img src={logoWhite} alt="logo"  className='h-[36px] mr-10' />
        <div className='flex flex-col gap-1 ml-20'>
            <p className='text-white text-[24px] font-bold font-sans mb-6'>Features</p>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Video Puzzles</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>FAQ</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Live forms</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Testimonial collection</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Education</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Personalized experiences</button>
        </div>
        <div className='flex flex-col gap-1 ml-20'>
            <p className='text-white text-[24px] font-bold font-sans mb-6'>Social Media</p>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Facebook</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Instagram</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Tiktok</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Twitter</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>LinkedIn</button>
        </div>
        <div className='flex flex-col gap-1 ml-20'>
            <p className='text-white text-[24px] font-bold font-sans mb-6'>Links</p>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Home</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Pricing</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Contact Us</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Product</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Community</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Support</button>
            <button className='text-white text-[24px] font-normal font-sans text-left'>Privacy Policy</button>
        </div>
    </div>
  )
}

export default Footer