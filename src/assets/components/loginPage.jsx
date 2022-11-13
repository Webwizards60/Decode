import React from "react";
import "../styles/login.scss";
import Logo from "../../img/logoDecode.png";
import { ButtonPrimary } from "../reuseAble";
import Google from "../../img/google.jpg";
import GitHub from "../../img/GitHub.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export class Login extends React.Component {
  render() {
    return (
      <motion.dev
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: -window.innerWidth, opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="Main"
      >
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
        >
          <div className="Blob Rblob1" />
        </motion.div>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
        >
          <div className="Blob Rblob2" />
        </motion.div>
        <div className="background">
          <h1>DECODE</h1>
        </div>
        <div className="loginElement">
          <div className="logoln">
            <motion.img
              src={Logo}
              className="loginLogo"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: 0.7,
              }}
            />
          </div>
          <motion.div
            className="loginContainer"
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              bounce: 5,
              delay: 0.5,
            }}
          >
            <div className="heading">
              <span>Sign in</span>
              <p>login to continue</p>
            </div>
            <div className="inputInfo">
              <input type="email" placeholder="jhonDoe@gmail.com" />
              <input type="password" placeholder="******" />
            </div>
            <div className="buttons">
              <button>Forgot Password</button>
            </div>
            <div className="loginBtn">
              <ButtonPrimary
                height="40px"
                width="160px"
                text="Login"
                size="20px"
                className="loginBtn"
                space="2px"
              />
            </div>
          </motion.div>
          <div className="otherSources">
            <img src={Google} />
            <img src={GitHub} />
          </div>
          <Link to={"/register"} className="regMsg">
            Sign up for free
          </Link>
          <Link to="/" className="backBtn">
            <i class="uil uil-arrow-left" /> Back
          </Link>
        </div>
      </motion.dev>
    );
  }
}
