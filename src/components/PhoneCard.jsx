import React, {useState} from 'react'




const PhoneCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    // Play the video programmatically
    const videoElement = document.getElementById('video');
    isPlaying ? videoElement.pause() :videoElement.play();
  };
  return (
    
    <div className='bg-white w-[332px] max-xs:w-[221.3px] h-[675px] max-xs:h-[450px] flex rounded-[28px]
    border-4 border-[#009b63] overflow-y-hidden relative
    
    '>
      {/* <video controlsList="nodownload" className='object-cover '
      id='video'
      style={{ outline: 'none', '-webkit-appearance': 'none' }}
      onClick={handlePlayClick}
      
      >
        <source src='https://media.videoask.com/transcoded/c2b1ad38-dac7-43d7-878c-ad97b7fd3001/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImMyYjFhZDM4LWRhYzctNDNkNy04NzhjLWFkOTdiN2ZkMzAwMSIsImV4cCI6MTY4NjYzMjE4M30.z5Y43obf6ZDvrkSUWfQ-Ot998BRFbI-zdpN1wdF8N9h_pM2oyWv8GKsPrEW2Qy9rs3wur0Ma-UNXgT2ZHv0vm8MFEPebynSCfoMAdbE_tuyycndEcZfkQTswCMyO3SYgZ151xgXIW8Jetw40xKU5HUt2iZ0qz5pcop5FZ4rSXZpIv6CFQ4Tq5dv6OfCXOJmt-nvJC6P8L2LU0_EE1UQZF3QAOkV_OzvNIWA8-yCDPZu_Nes40tWHeBQ_kX5PXfu81dctwV_Ztjvi5vc1KJw-vxibGbFzak_qVwmKhlINj3uE_NxFeQpjqgT6057wGa8olgh0kmv_1DEM4KnF4Qa783ZBvkql5bCIHh5YSXvDEO3z1p-74-4ljgmvH3XqPA8el7agsKRirE-lsSjOveBUPW-GQNqD_e-P9SOVD7uQ4vykZTHR-2NGmfNhYnoNwmB3wAoLivtGpkBNzamQsOZsQ7GNYx-PI1gpzc6LCzm_-WQX7WFKGOqGpPt5TSrzEyTGMKHfPgTikxbieCqdu_DljEBcGfQu5QWnXRq8wpVOq3zSt_oP0agQjhaE0mr4981eeksHtgIG94NYXxWoHVGiqL09ThlhO_vY8Ve1FsSiSDSvaYXaFQTaIR2lkzjvlcw4zDdwmpQvBtlyz7Pz9MLUXyDFekqW8ENGonYRJqK4SPU' type="video/mp4" />
        Your browser does not support the video tag.
      
      </video>
      {!isPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-20 h-20 flex items-center justify-center text-black"
          onClick={handlePlayClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16"> 
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> 
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
            
          </svg>
        </button>
      )} */}

        
    </div>
  )
}

export default PhoneCard