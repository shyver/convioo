import React from 'react'
import PrimaryButton from '../PrimaryButton'

const Widgets = () => {
  return (
    <div className='w-full h-[552.41px] max-lg:h-[1200px] max-[680px]:h-[1000px] max-[480px]:h-[800px] flex flex-row max-lg:flex-col justify-center gap-[43.33px] max-lg:gap-[10px] '>
            <div className='w-[650px] max-[680px]:w-[400px] max-[480px]:w-[300px] max-[370px]:w-[250px] h-[552.41px] max-[680px]:h-[400px] max-[480px]:h-[300px] bg-black flex rounded-[35px] m-auto'>

            </div>
            <div className='flex flex-col justify-center w-5/12 gap-[28px] m-auto'>
              <h1>Widgets</h1>
                <div className='w-fit pl-[16px] pr-[18px] py-[8px] bg-[#E9E7E0] text-[12px] font-bold text-[#3D4FE0] rounded-[4px] '>ONSITE</div>
                <p className='text-[24px] max-sm:text-[14px] text-[#2D2C2A] max-lg:w-[250px] max-[370px]:w-[150px] '>Amaze visitors with an interactive video experience,
that sits on the side of your site.</p>
                <p className='text-[#6C6A60] max-sm:text-[14px] text-[24px] font-medium max-lg:w-[250px] max-[370px]:w-[150px]'> <span className='font-bold'>Great for: </span> Founder Stories, FAQ, Announcements &
Promotions</p>
<PrimaryButton value="Get Convioo for free" bg={true}/>

            </div>


        </div>
  )
}

export default Widgets