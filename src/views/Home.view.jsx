import React from "react";
import "./Home.view.scss";

export default function Home(props) {

  return (
    <div className="Home">
      <h1>Home</h1>
      <strong>{process.env.REACT_APP_ENV}</strong>
    </div>  

  );
}
