import React, { useState } from "react";
import "../styles/dropDown.scss";
import WhatsApp from "../../img/whatsapp.png";
import Instagram from "../../img/instagram.png";
import Discord from "../../img/discord.png";

const dropdown = () => {
  return (
    <ul className="SubMenu">
      <li>
        <a href="https://chat.whatsapp.com/CC37a7Z8pI754iXyZKA9Yw" target="_blank">
          <img src={WhatsApp} className="dropDownImg" />
          <span className="dropDownTxt">WhatsApp</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/decode_05/" target="_blank">
          <img src={Instagram} className="dropDownImg" />
          <span className="dropDownTxt">InstaGram</span>
        </a>
      </li>
      <li>
        <a href="https://discord.gg/kWc7UKgE" target="_blank">
          <img src={Discord} className="dropDownImg" />
          <span className="dropDownTxt">Discord</span>
        </a>
      </li>
    </ul>
  );
};

export default dropdown;
