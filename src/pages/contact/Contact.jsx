import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div data-aos="flip-right" className="container">
        <form className="contact__form">
          <h2>Biz Bilan Aloqa</h2>
          <label htmlFor="">
            Username
            <input placeholder="Username" type="text" />
          </label>
          <label htmlFor="">
            Email
            <input placeholder="Email" type="text" />
          </label>
          <label htmlFor="">
            Description
            <textarea placeholder="Description" name="" id=""></textarea>
          </label>
          <button>Send to</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
