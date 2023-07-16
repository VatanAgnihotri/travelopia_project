import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="widget feel-safe full-width">
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="global-typography">
              <div className="heading-3">
                Feel safe with a globally accredited company
              </div>
              <p>
                Enchanting Travels is accredited by leading international travel
                associations, including USTOA. As a result, you can travel with
                complete peace of mind since your trip is financially protected.
              </p>
            </div>{" "}
            <a href="https://www.enchantingtravels.com/about-us/accreditations-awards/" target="_blank">
              {" "}
              <img
                src="https://res.cloudinary.com/enchanting/f_auto,q_70/et-web/2023/07/accreditations-logos-ustoa-atta.png"
                width="263"
                height="55"
                alt=""
                className="logos"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
