import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/mLoader.scss";
import { ProgressBar, ProgramAnimation } from "./progressBar";

const MainLoader = () => {
  const text = [
    "<h1> Decode </h1>",
    "print ('Decode')",
    "cout<< 'Decode' ",
    "printf('Decode')",
    "System.out.println('Decode')",
    "console.log('Decode')",
    "fmt.println('Decode')",
    "println!('Decode')",
    "System.Console.WriteLine('Decode')",
  ];

  const [load, setLoad] = useState(text[0]);

  let i = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (i < 9) {
        i = i + 1;
      }
      setLoad(text[i]);
    }, 500);
    return () => clearInterval(interval);
    console.log(i)
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
        <motion.span className="changingTxt" initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -10, opacity: 0}} transition={{
          repeat: Infinity,
          duration: 0.5
        }}>{load}</motion.span>
      </div>
    </motion.div>
  );
};

export default MainLoader;
