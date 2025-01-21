import React, { useState, useEffect } from 'react';
import { Line } from '../atoms/export';

function UserCommentBox({ icon, size, text, starsImage }) {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Determine viewport width only once when the component mounts
    setIsMobileView(window.innerWidth < 768);
  }, []);

  return (
    isMobileView ? (
      <div className={`userCommentBox ${size}`}>
        <div>
          <div>
            <img className="icon" src={icon} alt='faceimg' />
            <img className='stars' src={starsImage} alt="stars" />
          </div>
          <p>{text}</p>
        </div>
      </div>
    ) : (
      <div className={`userCommentBox ${size}`}>
        <div>
          <img className="icon" src={icon} alt='faceimg' />
          <p>{text}</p>
          <Line />
          <img className='stars' src={starsImage} alt="stars" />
        </div>
      </div>
    )
  );
}

export default UserCommentBox;
