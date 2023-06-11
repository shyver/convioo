import React from 'react'
import PrimaryButton from '../PrimaryButton'

const Widgets = () => {
  return (
    <div className='w-full h-[552.41px] flex flex-row gap-[43.33px]'>
            <div className='w-[48%] h-[552.41px] bg-black flex rounded-[35px] '>

            </div>
            <div className='flex flex-col justify-center w-5/12 gap-[28px]'>
              <h1>Carousel</h1>
                <div className='w-fit pl-[16px] pr-[18px] py-[8px] bg-[#E9E7E0] text-[12px] font-bold text-[#3D4FE0] rounded-[4px] '>ONSITE</div>
                <p className='text-[24px] text-[#2D2C2A]  '>Amaze visitors with an interactive video experience,
that sits on the side of your site.</p>
                <p className=' text-[#6C6A60] text-[24px] font-medium'> <span className='font-bold'>Great for: </span> Founder Stories, FAQ, Announcements &
Promotions</p>
<PrimaryButton value="Get Convioo for free" bg={true}/>

            </div>


        </div>
  )
}

export default Widgets