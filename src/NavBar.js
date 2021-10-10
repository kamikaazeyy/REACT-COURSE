import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";

export default function navBar() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className="row">
          <div>React context app</div>
          {context.theme}
          <button onClick={context.ToggleTheme}>Toggle Theme</button>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
