import React from "react";
import styles from "./Home.module.scss";
import { motion } from "framer";
import useBoxHeight from "../useBoxHeight";
import { Link } from "react-router-dom";

let transition = { type: "easeOut", delay: 0.3, duration: 0.5 };

// const linkVariants = {
//   hidden: {
//     y: -30,
//     opacity: 0,
//   },

//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { ...transition, delay: 2.5 },
//   },
// };

const containerVariants = {
  hidden: {
    scaleY: 0,
  },

  visible: {
    scaleY: 1,
    transition: { ...transition, delay: 0, duration: 2 },
  },
};

const boxVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: { ...transition, delay: 2, duration: 0.5 },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.Home}
    >
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        className={styles.logo}
      >
        <figure>
          <svg viewBox="0 0 580.25 606.52">
            <defs>
              <linearGradient
                id="a"
                x1="0.629"
                y1="0.085"
                x2="0.629"
                y2="1.085"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#fab062" />
                <stop offset="1" stopColor="#cb7246" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="-0.628"
                y1="0.573"
                x2="1.862"
                y2="0.573"
              />
            </defs>
            <path
              d="M4303,4531.742,4538.707,3968c20.727-57.586,90.215-56.434,108.641,0l235.9,563.742H4683.238a65.372,65.372,0,0,1-65.066-65.07h0c0-35.891,29.367-65.262,65.066-65.262h2.879l-.379-1.148h0l-93.863-242.621h0l-56.238,147.8h0l-.383,1.152-35.707,93.672h0l-.383,1.148H4503a65.455,65.455,0,0,1,65.262,65.262h0c0,35.7-29.367,65.07-65.262,65.07H4303Z"
              transform="translate(-4303 -3925.222)"
              fill="url(#a)"
            />
            <path
              d="M4303,4531.66l235.707-563.742c11.707-32.437,38.773-46.258,63.531-42.035v258.551l-10.363-26.871h0l-56.238,147.8h0l-.383,1.152-35.707,93.668h0l-.383,1.152H4503a65.452,65.452,0,0,1,65.262,65.258h0c0,35.7-29.367,65.07-65.262,65.07H4303Z"
              transform="translate(-4303 -3925.143)"
              fill="url(#b)"
            />
          </svg>
        </figure>
        {useBoxHeight().width <= 1024 ? <div> <Link to='/works'>WORKS</Link> <Link to='/contact'>CONTACT</Link> </div> : <></>}
      </motion.div>

      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        className={styles.text}
      >
        <h1>Akeem</h1>
        <p>Front end developer from Nigeria <img src={require('../../assets/Nigeria.svg') } alt='Nigeria' /></p>
        {/* <span>
          A goal-driven front-end developer with an unending passion to learn
          new tech in software development while building responsive websites
          and web apps
        </span> */}
      </motion.div>

      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        className={styles.socials}
      >
        <a href="htts://github.com">
          <img src={require("../../assets/github.svg")} alt="github account" />
        </a>
        <a href="htts://twitter.com">
          <img
            src={require("../../assets/twitter.svg")}
            alt="twitter account"
          />
        </a>
        <a href="htts://codepen.com">
          <img
            src={require("../../assets/codepen.svg")}
            alt="codepen account"
          />
        </a>
        <a href="htts://linkdin.com">
          <img
            src={require("../../assets/linkedin.svg")}
            alt="linkdIn account"
          />
        </a>
      </motion.div>
    </motion.div>
  );
}
