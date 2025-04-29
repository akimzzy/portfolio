import React from "react";
import { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import { motion } from "framer";
import useBoxHeight from "../useBoxHeight";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
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

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [_error, setError] = useState("");

  const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  useEffect(() => {
    emailjs.init(YOUR_PUBLIC_KEY);
  });

  const setStyle = (input, style = styles.goUp) =>
    input.trim() !== "" ? style : null;

  const clearField = () => {
    setEmail("");
    setMessage("");
  };

  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
        to_email: "a.akeem@yahoo.com",
        message: `From: ${email}\n\nMessage:\n${message}`,
      });

      setSent(true);
      clearField();
    } catch (error) {
      setError("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const initialState = () => {
    setLoading(false);
    setTimeout(() => {
      setSent(false);
      setError("");
    }, 3000);
  };

  useEffect(() => {
    sent && initialState();
  }, [sent]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.Contact}
    >
      <motion.div variants={boxVariants} className={styles.top}>
        <h2>Contact</h2>

        {useBoxHeight().width <= 1024 ? (
          <div>
            {" "}
            <Link to="/">Home</Link> <Link to="/works">Works</Link>{" "}
            <ResumeButton />
          </div>
        ) : (
          <></>
        )}
      </motion.div>

      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        className={styles.primary}
      >
        <a href="tel:+2348092574869">
          <span>
            <svg viewBox="0 0 27.992 28">
              <g>
                <g>
                  <g>
                    <path
                      d="M74.489,7185.263c-.864,2.612-4.249,3.919-6.668,3.714a21.161,21.161,0,0,1-9.625-3.994,31.735,31.735,0,0,1-9.956-11.868c-1.547-3.284-1.894-7.334.407-10.338A3.993,3.993,0,0,1,51.8,7161c1.918-.093,2.187,1.008,2.846,2.725.491,1.27,1.146,2.575,1.512,3.9.685,2.482-1.709,2.576-2.012,4.591-.188,1.288,1.357,2.986,2.055,3.9a18.8,18.8,0,0,0,4.867,4.479c1.062.671,2.777,1.884,3.993,1.212,1.874-1.025,1.7-4.179,4.316-3.116,1.357.56,2.67,1.362,3.966,2.054,2,1.082,1.909,2.183,1.146,4.516-.571,1.717.571-1.736,0,0"
                      transform="translate(-47 -7160.998)"
                      fill="#222f33"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </span>
          +234 8092 574 869
        </a>
        <a href="mailto:a.akeem@yahoo.com">
          <span>
            <svg width="30.451" height="23.195" viewBox="0 0 30.451 23.195">
              <g id="mail" transform="translate(0 -61)">
                <g
                  id="Group_28"
                  data-name="Group 28"
                  transform="translate(1.53 61)"
                >
                  <g id="Group_27" data-name="Group 27">
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M51.965,61h-25.1a2.645,2.645,0,0,0-1.147.268L39.357,74.9l3.056-2.937h0l10.7-10.7A2.645,2.645,0,0,0,51.965,61Z"
                      transform="translate(-25.721 -61)"
                      fill="#222f33"
                    />
                  </g>
                </g>
                <g
                  id="Group_30"
                  data-name="Group 30"
                  transform="translate(20.115 62.53)"
                >
                  <g id="Group_29" data-name="Group 29">
                    <path
                      id="Path_4"
                      data-name="Path 4"
                      d="M348.281,86.728,338.213,96.8l10.068,10.068a2.645,2.645,0,0,0,.268-1.147V87.874A2.645,2.645,0,0,0,348.281,86.728Z"
                      transform="translate(-338.213 -86.728)"
                      fill="#222f33"
                    />
                  </g>
                </g>
                <g
                  id="Group_32"
                  data-name="Group 32"
                  transform="translate(0 62.53)"
                >
                  <g id="Group_31" data-name="Group 31">
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M.268,86.721A2.645,2.645,0,0,0,0,87.868V105.71a2.646,2.646,0,0,0,.268,1.146L10.336,96.789Z"
                      transform="translate(0 -86.721)"
                      fill="#222f33"
                    />
                  </g>
                </g>
                <g
                  id="Group_34"
                  data-name="Group 34"
                  transform="translate(1.529 73.859)"
                >
                  <g id="Group_33" data-name="Group 33">
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M43.038,277.211l-3.057,2.938a.892.892,0,0,1-1.261,0l-2.938-2.938L25.714,287.278a2.645,2.645,0,0,0,1.147.268h25.1a2.646,2.646,0,0,0,1.147-.268Z"
                      transform="translate(-25.714 -277.211)"
                      fill="#222f33"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </span>
          a.akeem@yahoo.com
        </a>
      </motion.div>

      <motion.form
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        onSubmit={(e) => handleMessage(e)}
        className={styles.form}
      >
        <div className={styles.box}>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <label className={setStyle(email)} htmlFor="email">
            Your email
          </label>
        </div>

        <div className={styles.box}>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={loading}
          />
          <label className={setStyle(message, styles.goUpp)} htmlFor="message">
            Message
          </label>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {sent ? (
            <button
              style={{
                pointerEvents: "none",
                color: "#fff",
              }}
            >
              Message sent
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="feather feather-check-circle"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
            </button>
          ) : (
            <button style={loading ? { pointerEvents: "none" } : null}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send message
                  <span>
                    <svg
                      enableBackground="new 0 0 465.882 465.882"
                      viewBox="0 0 465.882 465.882"
                    >
                      <path
                        d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </>
              )}
            </button>
          )}
          {_error && (
            <p style={{ color: "#ff0000", fontSize: "0.9rem", margin: 0 }}>
              {_error}
            </p>
          )}
        </div>
      </motion.form>
    </motion.div>
  );
}
