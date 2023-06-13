import React, {useRef} from 'react'
import { stroke } from '../assets';
import { motion , useInView} from 'framer-motion';
import { fadeIn } from '../utils/motion';

const UseCard = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
    initial="hidden"
    animate={isInView ?"show" : "none"}
      variants={fadeIn(props.direction,"tween",0.2,1)}
      className='w-fit h-fit'
    >
    <a href='/' className={`w-[${props.width}] bg-[#2D2C2A] h-[180px] max-[395px]:h-[280px] rounded-[15.625px] flex flex-row max-[395px]:flex-col justify-between px-6 max-[395px]:px-6`}>
        <div className='flex flex-col my-[25.38px] w-full max-[395px]: gap-4 justify-between'>
        <div className='flex flex-col'>
        <h1 className='font-sans text-white min-[760px]:text-[36px] max-[760px]:text-[20px] max-[480px]:text-[16px]  w-10/12 mb-[-10px]'>{props.title}</h1>
        <p className='text-[#C6C4B8] w-9/12 font-medium max-sm:hidden'>{props.description}</p>
        </div>
        <img src={stroke} alt="stroke" className='w-[26.15px] h-[26.15px] '/>
        </div>
        <div className={`h-full overflow-hidden flex items-${props.itemAlign}`}>
        <div className={props.imgStyle}>
        <img src={props.image} alt="img" className='object-bottom ' />
        </div>
        </div>
    </a>
    </motion.div>

  )
}

export default UseCard