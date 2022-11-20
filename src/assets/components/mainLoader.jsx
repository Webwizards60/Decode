import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/mLoader.scss";
import { ProgressBar, ProgramAnimation } from "./progressBar";

const MainLoader = () => {
  const text = [
    "Initializing Pages",
    "Fetching Resources",
    "Getting Things Ready for you",
  ];

  const [load, setLoad] = useState(text[0]);

  let i = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (i < 2) {
        i = i + 1;
      }
      setLoad(text[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="mainLoader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="blobAni">
        <motion.div
          className="Blob1"
          initial={{ x: "20%", y: "-30%" }}
          animate={{ x: "-20%", y: "30%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="Blob2"
          initial={{ x: "-20%", y: "30%" }}
          animate={{ x: "20%", y: "-30%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="LoadSec">
        <div className="animation">
          <ProgramAnimation />
        </div>
        <ProgressBar />
        <span className="changingTxt">{load}</span>
      </div>
    </motion.div>
  );
};

export default MainLoader;
