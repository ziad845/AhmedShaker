import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/AhmedShaker.jpeg"
            className="avatar"
            alt=""
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 120 }}
          className="title"
        >
         <span className="Ahmed"> Ahmed Mohamed Shaker</span> AI & Machine Learning Engineering student with a
          strong passion for Natural Language Processing.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="sub-title"
        >
          Welcome to my portfolio! Explore my projects, skills, and the latest
          web technologies I work with to deliver exceptional user experiences.
        </motion.p>

        <motion.div
          className="all-icons flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://github.com/A7madShaker"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/ahmed-shakerr"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-linkedin"
          ></a>
        </motion.div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}
