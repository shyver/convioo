import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { motion } from 'framer-motion';

const IntroCard = (props) => {
  return (
    <div className='flex justify-center items-center h-[500px]'>
    <div className='flex flex-col justify-center items-center w-full gap-1'>
    <motion.div key={"introTitle"}
        initial={{ opacity: 0 }} // Initial state of the component (hidden)
        animate={{ opacity: 1 }} // Animation to apply (fade in)
        transition={{ duration: 2 }} // Duration of the animation
      >
        <h1 className='font-sans min-[760px]:text-[64px] max-[760px]:text-[40px] max-[480px]:text-[25px]'>{props.title}</h1>
        </motion.div>
        <motion.div key={"introTitle"}
        initial={{ opacity: 0 }} // Initial state of the component (hidden)
        animate={{ opacity: 1 }} // Animation to apply (fade in)
        transition={{ duration: 4 }} // Duration of the animation
      >
        <div className='w-full pb-8 flex justify-center'><h1 className='text-[16px] flex text-center'>Forge meaningful connections and strengthen business relationships by interacting face-to-face <br/>with your audience.</h1></div>
        </motion.div>
        <motion.div key={"introTitle"}
        initial={{ opacity: 0 }} // Initial state of the component (hidden)
        animate={{ opacity: 1 }} // Animation to apply (fade in)
        transition={{ duration: 2 }} // Duration of the animation
      >
        <div className='flex flex-row gap-1 relative'>
          <PrimaryButton value="Get Convioo for free"
          path="/singup"
          /> 
          <SecondaryButton
          value="Contact Sales"
          border={true}
          />
          
        </div>
        </motion.div>
    </div>
    </div>
  )
}

export default IntroCard