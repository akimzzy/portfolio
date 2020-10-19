import React, { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import "./App.scss";
import Home from "./Components/Home/Home";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import useBoxHeight from "./Components/useBoxHeight";



function App() {
  const width = useBoxHeight().width


  const move = () => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    });
  };

  useEffect(() => {
    move();
  });

  const display = () => {
    if(width <= 1024) {
      return <Home/>
    } else {
      return <>
          <Home />
          <Works />
          <Contact />
      </>
    }
  }

  return (
    <div className="page">{display()}<div className="cursor"></div></div>
  );
}

export default App;
