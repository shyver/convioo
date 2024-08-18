import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { motion } from 'framer-motion';

const IntroCard = (props) => {
  return (
    <div className='flex justify-center items-center h-[500px]'>
    <div className='flex flex-col justify-center items-center  gap-6 w-[800px]'>
    <motion.div key={"introTitle"}
        initial={{ opacity: 0 }} // Initial state of the component (hidden)
        animate={{ opacity: 1 }} // Animation to apply (fade in)
        transition={{ duration: 2 }} // Duration of the animation
      >
        <h1 className='font-sans font-bold min-[760px]:text-[64px] max-[760px]:text-[40px] max-[480px]:text-[25px] text-center'>{props.title}</h1>
        </motion.div>
        <motion.div key={"introButtons"}
        initial={{ opacity: 0 }} // Initial state of the component (hidden)
        animate={{ opacity: 1 }} // Animation to apply (fade in)
        transition={{ duration: 2 }} // Duration of the animation
      >
        <div className='flex flex-row gap-4 relative'>
        <SecondaryButton
          value="Contact Sales"
          border={true}
          />
          <PrimaryButton value="Get Convioo for free"
          path="http://localhost:3001"
          /> 
          
          
        </div>
        </motion.div>
    </div>
    </div>
  )
}

export default IntroCard