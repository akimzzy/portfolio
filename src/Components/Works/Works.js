import React, { useRef, useEffect } from "react";
import styles from "./Works.module.scss";
import data from "./data";
import { motion } from "framer";
import useBoxHeight from "../useBoxHeight";
import { Link } from "react-router-dom";
import ResumeButton from "../ResumeButton/ResumeButton";

let transition = { type: "easeOut", delay: 0.3, duration: 0.5 };

const containerVariants = {
  hidden: {
    scaleY: 0,
  },

  visible: {
    scaleY: 1,
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

export default function Works() {
  // const width = useBoxHeight().width

  const container = useRef();

  let skewConfig = {
    ease: 0.14,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    // document.querySelectorAll("a").forEach((x) => {
    //   x.addEventListener("mouseover", () => {
    //     const cursor = document.querySelector(".cursor");
    //     cursor.style.transform = "scale(2)";
    //   });
    // });

    // document.querySelectorAll("a").forEach((x) => {
    //   x.addEventListener("mouseleave", () => {
    //     const cursor = document.querySelector(".cursor");
    //     cursor.style.transform = "scale(1) translate(-50%, -50%)";
    //   });
    // });

    requestAnimationFrame(() => skewScrolling());
  });

  const skewScrolling = () => {
    const box = document.querySelector(`.${styles.box}`);
    if (box) {
      skewConfig.current = box.scrollTop; //200
      skewConfig.previous +=
        (skewConfig.current - skewConfig.previous) * skewConfig.ease; // 200 - 0 = 200
      skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100; // 200

      const difference = skewConfig.current - skewConfig.rounded; // 0
      const acceleration = difference / box.clientWidth; //
      const velocity = +acceleration;
      const skew = velocity * 40;

      // container.current.style.transform = `translateY(-${skewConfig.rounded}px)`;
      container.current
        .querySelectorAll("li")
        .forEach(
          (x) =>
            (x.style.transform = `translateY(-${
              skewConfig.rounded / 1.5
            }px) skewY(${skew}deg)`)
        );

      requestAnimationFrame(() => skewScrolling());
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.Works}
    >
      <motion.div variants={boxVariants} className={styles.top}>
        <h2>Works</h2>
        {useBoxHeight().width <= 1024 ? (
          <div>
            <Link to="/">Home</Link> <Link to="/contact">Contact</Link>{" "}
            <ResumeButton />
          </div>
        ) : (
          <ResumeButton />
        )}
      </motion.div>
      {/* <p>
            Some of the project done with HTML, CSS/SCSS, Javascript, Reactjs,
            Nodejs, Express, Nextjs, etc.
          </p> */}

      <motion.div variants={boxVariants} className={styles.box}>
        <ul ref={container}>
          {data.map((work) => (
            <li key={work.name}>
              <div>
                <div className={styles.header}>
                  <span>{work.type}</span>
                  <h3>{work.name}</h3>
                </div>
                {/* <p>{work.description}</p> */}
                <div className={styles.techs}>
                  {work.techs.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.actions}>
                <a target="_blank" rel="noreferrer" href={work.link}>
                  <span>
                    <svg
                      width="46"
                      height="46"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 10.5v8.625A1.875 1.875 0 0 1 16.125 21H4.875A1.875 1.875 0 0 1 3 19.125V7.875A1.875 1.875 0 0 1 4.875 6h7.85"></path>
                      <path d="M15.75 3H21v5.25"></path>
                      <path d="M10.5 13.5 20.625 3.375"></path>
                    </svg>
                  </span>
                </a>
                <a href={work.repo} target="_blank" rel="noreferrer">
                  <span>
                    <svg
                      id="Bold"
                      enableBackground="new 0 0 24 24"
                      height="512"
                      viewBox="0 0 24 24"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
          ))}
          {/* <div className="cursor"></div> */}
        </ul>
      </motion.div>
    </motion.div>
  );
}
