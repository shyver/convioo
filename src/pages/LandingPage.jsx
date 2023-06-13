import '../App.css';

import NavBar from '../components/NavBar';
import IntroCard from '../components/IntroCard';
import Utilities from '../components/Utilities';
import UseCases from '../components/UseCases';
import IntroSection from '../components/IntroSection';
function LandingPage() {
  return (
    <div className='bg-[#F8F7F3] flex justify-center flex-col gap-8'>
    <NavBar />
    <IntroCard title="Transform your business"/>
    <IntroSection bg='black' textColor='white' index="01" title="Interactive videos"
    description1="Perfect for product demos, education, and personalized recommendations."
    description2="Video quizzes can increase customer satisfaction and loyalty by providing a fun and interactive way for your audience to learn about your brand and products."
    />
    <IntroSection reverse={true} index="02" title="Interactive videos" primary={true}
    description1="Perfect for product demos, education, and personalized recommendations."
    description2="Video quizzes can increase customer satisfaction and loyalty by providing a fun and interactive way for your audience to learn about your brand and products."
    />
    <IntroSection bg='white' textColor='black' index="03" title="Interactive videos" primary={true}
    description1="Perfect for product demos, education, and personalized recommendations."
    description2="Video quizzes can increase customer satisfaction and loyalty by providing a fun and interactive way for your audience to learn about your brand and products."
    />
    
    <Utilities/>
    <UseCases/>
    <IntroCard title="Start for free"/>

    </div>
  );
}

export default LandingPage;
