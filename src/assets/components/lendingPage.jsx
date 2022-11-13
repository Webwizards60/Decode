import React from "react";
import { ButtonPrimary, SecondaryButton, Blob } from "../reuseAble";
import "../styles/Lending.scss";
import code from "../../img/imgss.png";
import { Navbar } from "./navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class LendingPage extends React.Component {
  render() {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{ x: window.innerWidth, opacity: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
        className="Main"
      >
        <Navbar />
        <div className="LendingPage">
          <div className="page">
            <div className="main">
              <div className="content">
                <div className="title">
                  <motion.h1
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    a <span className="specialText">Smart</span> and Efficient
                    Learning Platform
                  </motion.h1>
                </div>
                <motion.div
                  className="subTitle"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <span>learn together grow together</span>
                </motion.div>
                <Link to="/register">
                  <motion.div>
                    <ButtonPrimary
                      height="50px"
                      width="225px"
                      text="join now"
                      size="25px"
                      space="5px"
                      weight="900"
                    />
                  </motion.div>
                </Link>
              </div>
              <motion.div
                className="images"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 0.5,
                  delay: 1,
                }}
              >
                <img src={code} className="lendingImg" />
              </motion.div>
            </div>
            <motion.div
              className="blob blob1"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <Blob height="250px" />
            </motion.div>
            <motion.div
              className="blob blob2"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 5, type: "spring", stiffness: 100 }}
            >
              <Blob height="750px" />
            </motion.div>
          </div>
          <div className="backText">
            <h1>eat</h1>
            <h1>sleep</h1>
            <h1>code</h1>
            <h1>repeat</h1>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default LendingPage;
