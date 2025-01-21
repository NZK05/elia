import React, { useEffect } from "react";
import { send, gmailGray } from "../../images/export";
import { SalesManager, Cleaner } from "../molecules/export";

const CareerSectionLeftSide = ({ type }) => {
  const handleMailClick = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&to=elia@gmail.com",
      "_blank"
    );
  };

  const texts = {
    cleaner: {
      title: "დიასახლისი",
      text: <Cleaner />,
    },
    "sales-manager": {
      title: "გაყიდვების მენეჯერი",
      text: <SalesManager />,
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { title, text } = texts[type] || texts.cleaner;

  return (
    <div className="main-section-left-side">
      <div className="buttons">
        <a>
          <img src={send} alt="Send Icon" />
          დასაქმდი
        </a>
        <a onClick={handleMailClick} className="contact-us">
          <img src={gmailGray} alt="Gmail Icon" />
          მოგვწერე
        </a>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <br />
        <div>{text}</div>
      </div>
    </div>
  );
};

export default CareerSectionLeftSide;
