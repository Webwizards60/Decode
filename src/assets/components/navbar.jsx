import React from "react";
import logo from "../../img/logoDecode.png";
import { ButtonPrimary } from "../reuseAble";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} className="logoImg" />
            <span>decode</span>
          </div>

          <div className="links">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Questions</a>
              </li>
              <li>
                <a href="#">Social</a>
              </li>
            </ul>
          </div>
          <div className="loginButton">
            <Link to={"/login"}>
              <ButtonPrimary
                height="40px"
                width="160px"
                text="login"
                size="15px"
                space="3px"
                weight="900"
              />
            </Link>
          </div>
        </nav>
      </>
    );
  }
}
