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
    y: "-100vh",
  },

  visible: {
    y: "0",
    transition: { ...transition, delay: 0, duration: 1.5 },
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
    transition: { ...transition, delay: 1.5, duration: 0.5 },
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
        {useBoxHeight().width <= 1024 ? (
          <div>
            {" "}
            <Link to="/works">WORKS</Link> <Link to="/contact">CONTACT</Link>{" "}
          </div>
        ) : (
          <></>
        )}
      </motion.div>

      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        className={styles.text}
      >
        <h1>Akeem</h1>
        <p>
          Front end developer from Nigeria{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 44">
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-473.316 -282)"
            >
              <rect
                id="Rectangle_1"
                data-name="Rectangle 1"
                width="67"
                height="44"
                transform="translate(473.316 282)"
                fill="#fff"
              />
              <rect
                id="Rectangle_2"
                data-name="Rectangle 2"
                width="23"
                height="44"
                transform="translate(473.316 282)"
                fill="#05d605"
              />
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="23"
                height="44"
                transform="translate(517.316 282)"
                fill="#05d605"
              />
            </g>
          </svg>
          {/* <img src={require("../../assets/Nigeria.svg")} alt="Nigeria" /> */}
        </p>
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
        <a className={styles.socials.first} href="https://github.com/akimzzy">
          <svg
            id="Bold"
            enable-background="new 0 0 24 24"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
          </svg>
        </a>
        <a href="https://twitter.com/akimzzy">
          <svg
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0" />
          </svg>
        </a>
        <a href="https://codepen.io/Akimzzy">
          <svg
            id="Bold"
            enable-background="new 0 0 24 24"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/akeem-adeyemi-872905154/">
          <svg
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}
