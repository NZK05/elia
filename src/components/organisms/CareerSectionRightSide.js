import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const CareerSectionRightSide = () => {
  const form = useRef();
  const [error, setError] = useState(null);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/);
    if (words.length <= 150) {
      setText(inputText);
      setWordCount(words.length);
    } else {
      const limitedText = words.slice(0, 150).join(" ");
      setText(limitedText);
      setWordCount(150);
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const georgianLetterRegex = /[^ა-ჰ\s0-9.,!?'":(){}[\]<>|]/g;

    if (name === "from_name" || name === "message") {
      if (georgianLetterRegex.test(value)) {
        Swal.fire({
          icon: "error",
          title: "გამოიყენეთ ქართული ასოები",
          text: "Please use Georgian letters only.",
          confirmButtonText: "OK",
        });
      }
    }


    if (name === "user_phone") {
      if (/^\d*$/.test(value)) {
        e.target.value = value;
      } else {
        e.target.value = value.replace(/\D/g, "");
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setError(null);

    const formData = new FormData(form.current);
    const fromName = formData.get("from_name");
    const userPhone = formData.get("user_phone");
    const message = formData.get("message");

    if (!fromName || !userPhone || !message) {
      setError("Please fill in all fields.");
      return;
    }

    emailjs.sendForm("elia", "elia", form.current, "kMJRfrxh83rCUU8Rj").then(
      () => {
        Swal.fire({
          title: "გილოცავთ!",
          text: "თქვენი აპლიკაცია წარმატებით გაიგზავნა!",
          icon: "success",
          confirmButtonText: "OK",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "უპს!",
          text: "თქვენი აპლიკაცია ვერ გაიგზავნა!",
        });
      }
    );
  };

  return (
    <div className="main-section-right-side">
      <form ref={form} onSubmit={sendEmail}>
        <label>სახელი გვარი</label>
        <input
          type="text"
          name="from_name"
          required
          onChange={handleInputChange}
        />
        <label>ტელეფონის ნომერი</label>
        <input
          type="text"
          name="user_phone"
          required
          onChange={handleInputChange}
        />
        <label>მოკლედ გვიამბეთ თქვენს შესახებ</label>
        <div>
          <textarea
            name="message"
            value={text}
            onChange={(e) => {
              handleChange(e);
              handleInputChange(e);
            }}
            required
          />
          <span className="word-count">{wordCount} / 150</span>
        </div>
        <button type="submit">გაგზავნა</button>
      </form>
      {error && (
        <div className="error" style={{ color: "#E300", marginTop: "10px" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default CareerSectionRightSide;
