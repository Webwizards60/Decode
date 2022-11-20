import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Loading from "../../img/loading.json";
import Mobile from "../../img/mobileAnimation1.json";

function ProgressBar() {
  return (
    <>
      <span>Loading</span>
      <div className="loadBar">
        <motion.div
          className="Loaded"
          initial={{ width: 0, height: "100%" }}
          animate={{ width: "100%", height: "100%" }}
          transition={{
            duration: 8,
            type: "just",
            delay: 0.1,
          }}
        />
      </div>
    </>
  );
}

function ProgramAnimation() {
  const style = {
    height: "100%",
  };
  return (
    <>
      <Lottie animationData={Loading} style={style}></Lottie>
    </>
  );
}

function MobAnimation() {
  const style = {
    height: "100%",
  };

  return (
    <>
      <Lottie animationData={Mobile} style={style} />
    </>
  );
}

export { ProgressBar, ProgramAnimation, MobAnimation };
