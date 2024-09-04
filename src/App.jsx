import './App.css';

import NavBar from './components/NavBar';
import IntroCard from './components/IntroCard';
import Utilities from './components/Utilities';
import UseCases from './components/UseCases';
import IntroSection from './components/IntroSection';
import Partners from './components/Partners';
import VideoPuzzlesAndFAQ from './components/VideoPuzzlesAndFAQ';
import LiveForms from './components/LiveForms';
import TestimonialCollectionAndEducation from './components/TestimonialCollectionAndEducation';
import PersonalizedExperience from './components/PersonalizedExperience';
import MockupSection from './components/MockupSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
function App() {
  return (
    <div className='bg-white flex justify-center flex-col gap-8'>
    <NavBar />
    <IntroCard title="Get face to face with interactive video"/>
    <IntroSection bg='black' textColor='white'  title="Create fully interactive videos from scratch"
    description1="Perfect for product demos, education, and personalized recommendations."
    description2="Video quizzes can increase customer satisfaction and loyalty by providing a fun and interactive way for your audience to learn about your brand and products as well as enhance user experience."
    reverse={true}
    />
    <Partners/>
    <VideoPuzzlesAndFAQ/>
    <LiveForms/>
    <TestimonialCollectionAndEducation/>
    <PersonalizedExperience/>
    <MockupSection/>
    <Testimonials/>
    <Footer/>
    {/* <Utilities/>
    <UseCases/>
    <IntroCard title="Start for free"/> */}

    </div>
  );
}

export default App;
