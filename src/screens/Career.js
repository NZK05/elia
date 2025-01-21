import "../scss/global.scss";
import React, {useEffect} from "react";
import {
  locationBlue,
  phoneBlue,
  instagramBlue,
  facebookBlue,
  send,
  gmailGray,
  wallet,
  pencil,
  briefcase,
  line,
} from "../images/icons/export";
import { building } from "../images/export";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


function Career() {
  const [showAlert, setShowAlert] = useState(false);
  
  const handleMailClick = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&to=elia@gmail.com",
      "_blank"
    );
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const navigate = useNavigate();
  const handleLocationClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/67+%E1%83%9B%E1%83%98%E1%83%A0%E1%83%98%E1%83%90%E1%83%9C+%E1%83%9B%E1%83%94%E1%83%A4%E1%83%98%E1%83%A1+%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90,+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98+0131/@41.7875544,44.742081,768m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40446e05fa3c3c0d:0x65d306d7dc427b4c!8m2!3d41.7875504!4d44.7446559!16s%2Fg%2F11t3f1jpg_?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D`;
    window.open(googleMapsUrl, "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('558655253').then(
      () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000); 
      },
      (err) => {
        console.error('ნომრის დაკოპირება ვერ მოხდა: ', err);
      }
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="career">
      <div className="contact-section">
        <div className="left-side">
          <a onClick={copyToClipboard}>
            <img src={phoneBlue} />
            <p>558655253</p>
          </a>
          <a onClick={handleLocationClick}>
            <img src={locationBlue} />
            <p>მირიან მეფის 67</p>
          </a>
        </div>
        {showAlert && (
          <div className='custom-alert'>
            <p>ნომერი დაკოპირებულია</p>
          </div>
        )}
        <div className="right-side">
          <img src={instagramBlue} />
          <img src={facebookBlue} />
        </div>
      </div>
      <div className="main-section">
        <div className="left-side">
          <p className="title">გახდი ჩვენი</p>
          <p className="title">გუნის წევრი</p>
          <p className="title-mobile">გახდი ჩვენი გუნის წევრი</p>
          <p>დამლაგებელი ან გაყიდვების მენეჯერი</p>
          <div className="buttons">
            <a onClick={() => {handleScroll('second-section')}}>
              <img src={send} />
              ვაკანსიები
            </a>
            <a onClick={handleMailClick} className="contact-us">
              <img src={gmailGray} alt="Gmail Icon" />
              მოგვწერე
            </a>
          </div>
        </div>
        <div className="right-side">
          <img src={building} />
        </div>
      </div>
      <div className="second-section" id="second-section">
        <h1>ჩვენი ვაკანსიები</h1>
        <div className="jobs-container">
          <div className="cleaner">
            <div className="title"><a onClick={() => navigate('/career/cleaner')}>დიასახლისი</a></div>
            <img className="line" src={line} />
            <div className="info1">
              <div className="info">
                <img src={locationBlue} />
                თბილისი
              </div>
              <div className="info">
                <img src={briefcase} />
                გრაფიკი: 09:00-13:00
              </div>
            </div>
            <img className="line" src={line} />
            <div className="info2">
              <div className="info">
                <img src={wallet} />
                ანაზღაურება
              </div>
              <div className="info">
                <img src={pencil} />3 კვირის წინ
              </div>
            </div>
          </div>

          <div className="sales">
            <div className='title'><a onClick={() => navigate('/career/sales-manager')}>გაყიდვების მენეჯერი</a></div>
            <img className="line" src={line}/>
            <div className="info1">
              <div className="info"><img src={locationBlue}/>თბილისი</div>
              <div className="info"><img src={briefcase}/>გრაფიკი: 09:00-13:00</div>
            </div>
            <img className="line" src={line}/>
            <div className="info2">
              <div className="info"><img src={wallet}/>ანაზღაურება</div>
              <div className="info"><img src={pencil}/>3 კვირის წინ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;