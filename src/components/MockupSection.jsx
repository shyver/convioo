import React from 'react'
import { phoneMockup } from '../assets'
import SecondaryButton from './SecondaryButton'
import PrimaryButton from './PrimaryButton'

const MockupSection = () => {
  return (
    <div className='static flex flex-col items-center '>
        <img src={phoneMockup} alt='phone mockup' width={1031} className='mt-36 z-10'/>
        <h1 className='absolute text-[180px] font-bold font-sans text-center px-20' >
          Enhance your user experience
        </h1>
        <div className=' font-semibold font-sans text-[28px] w-[1020px] text-center'>
        Amaze your visitors with a dynamic and interactive video experience <br/>
that will aid them in their journey using your website as well as help you <br/>
build business relationships with your users and increase your conversion rate
        </div>
        <div className=' font-bold font-sans text-[32px] w-[1020px] text-center mt-8'>
          Start now for free!
          </div>
          <div className='flex flex-row gap-4 relative mt-10'>
        <SecondaryButton
          value="Contact Sales"
          border={true}
          />
          <PrimaryButton value="Get Convioo for free"
          path="http://localhost:3001"
          /> 
          
          
        </div>
        </div>
  )
}

export default MockupSection