import React, { useRef, useEffect } from "react";
import styles from "./Works.module.scss";
import data from "./data";
import { motion } from "framer";
import useBoxHeight from "../useBoxHeight";
import { Link } from "react-router-dom";

let transition = { type: "easeOut", delay: 0.3, duration: 0.5 };

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

export default function Works() {
  // const width = useBoxHeight().width

  const container = useRef();

  let skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    document.querySelectorAll("a").forEach((x) => {
      x.addEventListener("mouseover", () => {
        const cursor = document.querySelector(".cursor");
        cursor.style.transform = "scale(1.7)";
      });
    });

    document.querySelectorAll("a").forEach((x) => {
      x.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.style.transform = "scale(1)";
      });
    });

    requestAnimationFrame(() => skewScrolling());
  });

  const skewScrolling = () => {
    skewConfig.current = document.querySelector(`.${styles.box}`).scrollTop; //200
    skewConfig.previous +=
      (skewConfig.current - skewConfig.previous) * skewConfig.ease; // 200 - 0 = 200
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100; // 200

    const difference = skewConfig.current - skewConfig.rounded; // 0
    const acceleration =
      difference / document.querySelector(`.${styles.box}`).clientWidth; //
    const velocity = +acceleration;
    const skew = velocity * 70;

    // container.current.style.transform = `translateY(-${skewConfig.rounded}px)`;
    container.current
      .querySelectorAll("li")
      .forEach(
        (x) =>
          (x.style.transform = `translateY(-${skewConfig.rounded/1.5}px) skewY(${skew}deg)`)
      );

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.Works}
    >
      <motion.div variants={boxVariants}>
        <div className={styles.top}>
          <h2>Works</h2>
          {useBoxHeight().width <= 1024 ? <ul> <Link to='/'>Home</Link> <Link to='/contact'>Contact</Link> </ul> : <></>}
        </div>
        {/* <p>
          Some of the project done with HTML, CSS/SCSS, Javascript, Reactjs,
          Nodejs, Express, Nextjs, etc.
        </p> */}
      </motion.div>

      <motion.div variants={boxVariants} className={styles.box}>
        <ul ref={container}>
          {data.map((work) => (
            <li key={work.name}>
              <div>
                <h3>{work.name}</h3>
                {/* <p>{work.description}</p> */}
                <div className={styles.techs}>
                  {work.techs.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.actions}>
                <a href={work.link}>
                  <span>
                    <svg
                      id="Capa_1"
                      enableBackground="new 0 0 512 512"
                      height="512"
                      viewBox="0 0 512 512"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <g>
                          <path d="m256 512c-12.406 0-22.5-10.094-22.5-22.5 0-.399.011-.795.031-1.189l-125.923-52.158c-4.121 4.576-10.089 7.457-16.718 7.457-12.406 0-22.5-10.094-22.5-22.5s10.094-22.5 22.5-22.5 22.5 10.094 22.5 22.5c0 .399-.011.795-.031 1.189l125.923 52.158c4.121-4.576 10.089-7.457 16.718-7.457s12.597 2.881 16.718 7.457l125.923-52.158c-.021-.395-.031-.79-.031-1.189 0-12.406 10.094-22.5 22.5-22.5s22.5 10.094 22.5 22.5-10.094 22.5-22.5 22.5c-6.629 0-12.597-2.881-16.718-7.457l-125.923 52.158c.021.395.031.79.031 1.189 0 12.406-10.094 22.5-22.5 22.5zm0-30c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm165.109-68.391c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm-330.218 0c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.365-7.5-7.5-7.5zm165.109 8.391c-91.533 0-166-74.467-166-166s74.467-166 166-166c32.449 0 63.883 9.364 90.904 27.081 3.464 2.271 4.431 6.921 2.16 10.385-2.271 3.465-6.923 4.43-10.385 2.16-8.474-5.556-17.425-10.208-26.727-13.92 6.728 6.835 12.997 14.967 18.689 24.317 3.544 5.82 6.791 11.998 9.727 18.477h30.971c-3.721-4.376-7.714-8.573-11.973-12.575-3.02-2.836-3.168-7.582-.331-10.601 2.836-3.021 7.583-3.168 10.601-.331 33.278 31.261 52.364 75.366 52.364 121.007 0 91.533-74.467 166-166 166zm7.5-68.5v52.961c20.287-2.926 39.351-17.682 54.33-42.285 2.087-3.427 4.061-6.987 5.92-10.676zm-75.25 0c1.859 3.688 3.833 7.249 5.92 10.676 14.979 24.604 34.043 39.359 54.33 42.285v-52.961zm152.119 0c-2.936 6.479-6.183 12.656-9.727 18.477-5.675 9.32-11.923 17.432-18.627 24.253 23.078-9.253 43.37-24.052 59.201-42.729h-30.847zm-199.586 0c15.831 18.678 36.123 33.477 59.201 42.729-6.704-6.821-12.952-14.933-18.627-24.253-3.544-5.82-6.791-11.998-9.727-18.477h-30.847zm205.636-15h36c14.253-21.768 23.041-47.426 24.397-75h-46.918c-.733 26.702-5.377 52.296-13.479 75zm-82.919 0h66.921c8.692-22.289 13.69-47.983 14.472-75h-81.393zm-81.921 0h66.921v-75h-81.393c.782 27.017 5.78 52.711 14.472 75zm-51.998 0h36c-8.103-22.704-12.746-48.298-13.479-75h-46.918c1.356 27.574 10.144 53.232 24.397 75zm230.317-90h46.922c-1.304-27.121-9.67-52.779-24.246-75h-36.155c8.102 22.704 12.746 48.298 13.479 75zm-96.398 0h81.393c-.781-27.017-5.779-52.711-14.472-75h-66.921v17.5c0 4.143-3.357 7.5-7.5 7.5s-7.5-3.357-7.5-7.5v-17.5h-66.921c-8.692 22.289-13.69 47.983-14.472 75h81.393v-27.5c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5zm-158.316 0h46.918c.733-26.702 5.377-52.296 13.479-75h-36c-14.253 21.768-23.041 47.426-24.397 75zm158.316-90h60.25c-1.859-3.688-3.833-7.249-5.92-10.676-14.979-24.604-34.043-39.359-54.33-42.285zm-75.25 0h60.25v-52.961c-20.287 2.926-39.351 17.682-54.33 42.285-2.087 3.427-4.061 6.988-5.92 10.676zm-47.467 0h30.848c2.936-6.479 6.183-12.656 9.727-18.477 5.675-9.32 11.923-17.432 18.627-24.253-23.079 9.253-43.371 24.052-59.202 42.73zm296.494 231.072c-.957 0-1.929-.184-2.867-.573-3.827-1.585-5.645-5.972-4.059-9.799l44.105-106.482c-4.575-4.121-7.456-10.089-7.456-16.718s2.881-12.597 7.457-16.718l-52.158-125.923c-.395.021-.79.031-1.189.031-12.406 0-22.5-10.094-22.5-22.5s10.094-22.5 22.5-22.5 22.5 10.094 22.5 22.5c0 6.629-2.881 12.597-7.457 16.718l52.158 125.923c.395-.021.79-.031 1.189-.031 12.406 0 22.5 10.094 22.5 22.5s-10.094 22.5-22.5 22.5c-.399 0-.795-.011-1.189-.031l-44.102 106.471c-1.196 2.888-3.989 4.632-6.932 4.632zm52.223-141.072c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm-68.391-165.109c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm-346.386 306.181c-2.943 0-5.735-1.743-6.932-4.632l-44.102-106.471c-.395.021-.79.031-1.189.031-12.406 0-22.5-10.094-22.5-22.5s10.094-22.5 22.5-22.5c.399 0 .795.011 1.189.031l52.158-125.923c-4.576-4.121-7.457-10.089-7.457-16.718 0-12.406 10.094-22.5 22.5-22.5 6.629 0 12.597 2.881 16.718 7.457l125.923-52.158c-.021-.395-.031-.79-.031-1.189 0-12.406 10.094-22.5 22.5-22.5s22.5 10.094 22.5 22.5c0 .399-.011.795-.031 1.189l106.619 44.163c3.827 1.585 5.645 5.972 4.059 9.799-1.585 3.827-5.973 5.647-9.799 4.059l-106.63-44.167c-4.121 4.575-10.09 7.457-16.718 7.457-6.629 0-12.597-2.881-16.718-7.457l-125.923 52.158c.021.395.031.79.031 1.189 0 12.406-10.094 22.5-22.5 22.5-.399 0-.795-.011-1.189-.031l-52.158 125.923c4.576 4.121 7.457 10.089 7.457 16.718s-2.881 12.597-7.457 16.718l44.105 106.482c1.586 3.827-.231 8.214-4.059 9.799-.938.389-1.91.573-2.866.573zm-52.223-141.072c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm68.391-165.109c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.365-7.5-7.5-7.5zm165.109-68.391c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                </a>
                <a href={work.repo}>
                  <span>
                    <svg
                      id="Bold"
                      enableBackground="new 0 0 24 24"
                      height="512"
                      viewBox="0 0 24 24"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
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
