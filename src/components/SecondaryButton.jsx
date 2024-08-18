import React from 'react'
import {boneWhite} from '../constants'
// props : bool border , string path , function clickCallBack , String value
const SecondaryButton = (props) => {
    const border= props.border ? 'border-2' : '';
    const bg=props.bg ? boneWhite : ''
  return (
 <a href={props.path} >
    <div className={`${bg} h-[46px] text-black w-fit
     flex justify-center items-center flex-row 
    px-[12px] py-[16px] gap-10 relative 
     rounded-[8px] ${border} border-[#080807] text-base font-inter font-medium
      font-sans
        `}
        onClick={props.clickCallBack}
        
        >
          <h1 className='p-1'>
          {props.value}
          </h1>
          
          
          </div>
        </a>
  )
}

export default SecondaryButton