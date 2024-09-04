import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='w-[380px] h-[523px] rounded-[10px] p-[16px] gap-[24px] flex flex-col bg-[#18181B] text-white'>
        <div className='flex flex-row gap-4 items-center'>
            <div  className='w-[77px] h-[77px] rounded-full bg-blue-500'/>
            <div className='flex flex-col'>
                <div className='font-sans text-[26px] text-white font-bold'>John Doe</div>
                <div className='font-sans text-[18px] text-[#D4D4D8] font-bold'>CEO at Company</div>
            </div>

        </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lacus at orci scelerisque elementum. Curabitur id ligula malesuada tellus placerat elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
        <div>Donec feugiat in quam a laoreet. Sed rhoncus est sit amet nisi laoreet feugiat. Praesent sollicitudin nec dolor sed cursus. Maecenas iaculis velit sed velit venenatis, at pharetra urna consectetur. Sed vestibulum velit massa, eget laoreet ligula vulputate eu. Morbi sem magna, laoreet a orci nec, blandit pretium lorem</div>
    </div>
  )
}

export default TestimonialCard