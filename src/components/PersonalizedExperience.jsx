import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'

const PersonalizedExperience = () => {
  return (
    <div className=' flex flex-row justify-between gap-10 items-end'>
            <div className=' h-[604px] w-[1006px] rounded-[50px] bg-[#D4D4D8] mb-4  '>
        
        </div>
    <div>
    <h1 className='text-[42px] font-sans font-bold mb-4'>Personalized experiences</h1>

    <div className='font-sans font-medium text-[20px] mb-6 w-[530px]'>
    Create several different options and choices for users to
    engage with and have their own personal experience.
    </div>
    </div>
    

</div>
  )
}

export default SectionWrapper(PersonalizedExperience)