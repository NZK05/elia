import '../scss/global.scss';
import { MainSection, ExperienceSection, ServiceSection, HowWeWorkSection, UserCommentsSection, CalculatorAndCareerSection} from '../components/sections/export';

function Home() {
  return (
      <div className='home'>
        <MainSection/>
        <ExperienceSection/>
        <ServiceSection/>
        <HowWeWorkSection/>
        <UserCommentsSection/>
        <CalculatorAndCareerSection/>
      </div>
  );
}

export default Home;
