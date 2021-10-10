import React, { useState } from "react";

const { Provider, Consumer } = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");
  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <Provider value={{ theme, ToggleTheme }}>{props.children}</Provider>;
}
export { ThemeContextProvider, Consumer as ThemeContextConsumer };
