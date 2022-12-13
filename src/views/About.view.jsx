import React from "react";
import "./Home.view.scss";
import { LinkPropio } from "../components/LinkPropio.component";

export default function Home(props) {
  return (
    <div className="Home">
      <h1>About</h1>
      <LinkPropio href="/store" className="Nav-link">
        Navegar a Store
      </LinkPropio>
    </div>
  );
}
