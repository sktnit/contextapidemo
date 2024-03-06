import React, { useState } from "react";
import ThemeContext from "./contexts/ThemeContext";
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MyComponent />
      <MyComponent2 />
    </ThemeContext.Provider>
  );
};
export default App;
