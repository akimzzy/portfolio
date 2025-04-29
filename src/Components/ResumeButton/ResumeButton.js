import React from "react";
import styles from "./ResumeButton.module.scss";

const ResumeButton = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1657J1EJtiPtc16_3ghXgpM6iPv_CQesF/view"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.resumeBtn}
    >
      Resume
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg> */}
    </a>
  );
};

export default ResumeButton;
