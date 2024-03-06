import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
const MyComponent2 = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Theme for MyComponent2: {theme}</h1>
      {/* <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button> */}
    </div>
  );
};

export default MyComponent2;
