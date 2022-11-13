import React from "react";
import { motion } from "framer-motion";
import "../styles/register.scss";
import Person from "../../img/regImg.png";
import { Link } from "react-router-dom";
import { ButtonPrimary, GlassInput } from "../reuseAble";

export class Register extends React.Component {
  render() {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ y: -window.innerHeight, opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="Main register"
      >
        <motion.div
          className="Blob Rblob3"
          initial={{ x: "100vw", y: "100vh" }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
        />
        <div>
          <div className="infoSec">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
                duration: 0.5,
              }}
              className="title"
            >
              <span>
                Join <br />
                Decode Now{" "}
              </span>
            </motion.div>
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              src={Person}
              className="regImg"
            />
            <div>
              <Link to="/login" className="logBtn">
                <a href="#">
                  Already have an account? <span>Login Now</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="input">
            <div className="inputInfo">
              <GlassInput
                type="text"
                placeholder="enter your Name"
                height="60px"
                width="450px"
                className="input"
                delay="0.4"
              />
              <GlassInput
                type="text"
                placeholder="enter your Email-Id"
                height="60px"
                width="450px"
                className="input"
                delay="0.5"
              />
              <GlassInput
                type="text"
                placeholder="create a password"
                height="60px"
                width="450px"
                className="input"
                delay="0.6"
              />
              <GlassInput
                type="text"
                placeholder="confirm your password"
                height="60px"
                width="450px"
                className="input"
                delay="0.7"
              />
            </div>
            <ButtonPrimary
              height="50px"
              width="400px"
              text="Register"
              size="25px"
              space="5px"
              weight="500"
            />
          </div>
        </div>
      </motion.div>
    );
  }
}
