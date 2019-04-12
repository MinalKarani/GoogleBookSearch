import React from "react";
import "./style.css";



function Jumbotron({ children }) {
  return (
    /*<div
      style={{ height: 350, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>*/
    <div
    style={{ height: 350, clear: "both", paddingTop: 120, textAlign: "center" ,backgroundImage: 'jumbo.jpg',backgroundSize:"cover"}}
    className="jumbotron"
  >
    {children}
  </div>
  );
}

export default Jumbotron;
