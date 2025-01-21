import { secondSectionBuilding } from '../../images/export';
import { ServiceSectionRightSide } from '../organisms/export';

function ServiceSection() {
  return (
    <div className='serviceSection' id='serviceSection'>
      <div className='left-side'>
        <img src={secondSectionBuilding} alt='building' />
      </div>
      <ServiceSectionRightSide/>
    </div>
  );
}

export default ServiceSection;
