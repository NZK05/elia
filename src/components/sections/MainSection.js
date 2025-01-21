import { building2, mainSectionBuilding } from '../../images/export';
import { MainSectionLeftSide } from '../organisms/export';

function MainSection() {
  return (
    <div className='mainSection' id='mainSection'>
      <MainSectionLeftSide/>
      <div className='right-side'>
        <img src={mainSectionBuilding} alt="building"/>
        <img className='respoImg' src={building2} alt="building" />
      </div>
    </div>
  );
}

export default MainSection;
