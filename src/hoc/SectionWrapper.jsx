import React from 'react'

const SectionWrapper = (Component) => 
function HOC(props){
  return (
    <div className='mx-[30px] min-[350px]:mx-[10px]'>
        <Component {...props}/>

    </div>
  )
}

export default SectionWrapper

