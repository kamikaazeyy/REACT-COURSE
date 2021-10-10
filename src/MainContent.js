import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";

export default function MainContent() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={`content ${context.theme}`}>
          <h1>Welcome to my app blahblahblahb;ah</h1>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
