import React from 'react';


// props : string path , function clickCallBack , String value
const PrimaryButton = (props) => {
  return (
    <a href={props.path}
    
    >
    <div className="font-sans w-[205px] h-[46px] bg-[#080807] text-white flex justify-center items-center flex-row
    px-[12px] py-[16px] gap-10 relative rounded-[8px] text-base font-inter font-normal

        "
        onClick={props.clickCallBack}
        >{props.value}</div>
        </a>
  )
}

export default PrimaryButton