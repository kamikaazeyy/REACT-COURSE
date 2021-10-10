import React from "react";
import NavBar from "./NavBar";
import { ThemeContextConsumer } from "./ThemeContext";

export default function Layout(props) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div>
          <div className={`  header ${context.theme}`}>
            <NavBar />
          </div>
          {props.children}
        </div>
      )}
    </ThemeContextConsumer>
  );
}
