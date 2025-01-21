import React, { useState, useEffect } from 'react';
import { face1, face2, face3 } from '../../images/export';

function HowWeWorkSectionGroupInfo() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [showGroupInfo, setShowGroupInfo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleGroupInfo = () => {
    setShowGroupInfo(!showGroupInfo);
  };

  return (
    <div className='groupInfo'>
      {isMobileView ? (
        <div>
          <h4>მომუშავე ჯგუფის შემადგენლობა</h4>
          {showGroupInfo && (
            <div className="groupInfoDetails">
              <div>
                <img src={face2} alt="person" />
                <p>ხელმძღვანელი</p>
              </div>
              <div>
                <img src={face3} alt="person" />
                <p>დიასახლისები</p>
              </div>
              <div>
                <img src={face1} alt="person" />
                <p>მონიტორინგი</p>
              </div>
            </div>
          )}
          <button onClick={toggleGroupInfo}>
            {showGroupInfo ? 'ნაკლები' : 'გაიგე მეტი'}
          </button>
        </div>
      ) : (
        <>
          <h4>მომუშავე ჯგუფის შემადგენლობა</h4>
          <div>
            <img src={face2} alt="person" />
            <p>ხელმძღვანელი</p>
          </div>
          <div>
            <img src={face3} alt="person" />
            <p>დიასახლისები</p>
          </div>
          <div>
            <img src={face1} alt="person" />
            <p>მონიტორინგი</p>
          </div>
        </>
      )}
    </div>
  );
}

export default HowWeWorkSectionGroupInfo;
