import React ,{useState} from 'react';
import { navLinks } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';
import SwitchCard from './UtilityPages/SwitchCard';

const Utilities = () => {
    const [active, setActive]= useState('Widgets');
  return (
    <div className='flex justify-center flex-col items-center '>
        <h1 className='font-sans min-[760px]:text-[64px] max-[760px]:text-[40px] max-[480px]:text-[25px]'>Great for onsite & offsite</h1>
        <h1 className='text-[26.25px] text-[#6C6A60] pb-10'>
        Enhance user experience with video on every page and screen
        </h1>
        <div className='bg-black h-[62.8px] w-full flex rounded-[17.33px] flex-row justify-between items-center mb-[17.33px] px-2'>
            {navLinks.map((Link, index)=>(
          <div key={index}
          className={`${active===Link.title ? 'bg-[#3D4FE0]': 'bg-black'} text-white text-[18px] font-medium cursor-pointer px-4 py-3 flex rounded-[8.67px] flex-row gap-1 items-center h-[50px]`}
          onClick={()=>setActive(Link.title
            )}
          
          >
            <img src={Link.icon} alt="icon" className='h-[21.17px] w-[24.19px]'/> &nbsp; <h1 className='max-md:hidden'> {Link.title} </h1>
          </div>

        ))}
        </div>
        <SwitchCard active={active}/>
    </div>
  )
}

export default SectionWrapper(Utilities)



