import React from 'react'
import Slider from 'react-infinite-logo-slider'
const Partners = () => {
  return (
    <div className='mb-8'>
      <h3 className='text-center mb-8 text-[20px] font-sans'>
        Loved and used by
      </h3>
      <div className='bg-[#f7f7f8] p-4'>
      <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <div className='bg-black w-[18px] h-[19px] rounded-full '/>
                
                <h3 className='font-sans font-semibold text-[28px] ml-10'>Brand Logo</h3>
            </Slider.Slide>
            <Slider.Slide>
            <div className='bg-black w-[18px] h-[19px] rounded-full '/>
                
                <h3 className='font-sans font-semibold text-[28px] ml-10'>Brand Logo</h3>
            </Slider.Slide>
            <Slider.Slide>
            <div className='bg-black w-[18px] h-[19px] rounded-full '/>
                
                <h3 className='font-sans font-semibold text-[28px] ml-10'>Brand Logo</h3>
            </Slider.Slide>
            <Slider.Slide>
            <div className='bg-black w-[18px] h-[19px] rounded-full '/>
                
                <h3 className='font-sans font-semibold text-[28px] ml-10'>Brand Logo</h3>
            </Slider.Slide>
        </Slider>
        </div>
    </div>
  )
}

export default Partners