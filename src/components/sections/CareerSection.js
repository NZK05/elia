import React, { useEffect } from "react";
import { CareerSectionLeftSide, CareerSectionRightSide } from '../organisms/export';

function CareerSection({ type }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="main-section">
      <CareerSectionRightSide />
      <CareerSectionLeftSide type={type} />
    </div>
  );
}

export default CareerSection;
