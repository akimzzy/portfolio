import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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

  return (
    <Router>
      <div className="cursor"></div>

        <Switch>
          <Route path="/" exact component={width <= 1024 ? Home : fullHome} />
          <Route path="/contact" component={width <= 1024 ? Contact : fullHome} />
          <Route path="/works" component={width <= 1024 ? Works : fullHome} />
        </Switch>
    </Router>
  );
}


function fullHome(){
  return <div className="page">
  <Home />
  <Works />
  <Contact />
  </div>
}

export default App;
