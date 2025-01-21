import "../scss/global.scss";
import { CareerSectionContact } from '../components/organisms/export';
import { CareerSection } from '../components/sections/export';
import { useParams } from 'react-router-dom';

function CareerDetails() {
  const { type } = useParams();
  console.log("CareerDetails type:", type); // Debugging

  return (
    <div className="career-detail">
      <CareerSectionContact />
      <CareerSection type={type} />
    </div>
  );
}

export default CareerDetails;
