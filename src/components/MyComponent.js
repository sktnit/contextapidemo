import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
const MyComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default MyComponent;
