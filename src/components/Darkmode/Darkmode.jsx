import { useState } from "react";
import "./Darkmode.css";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changemode = () => {
    setDarkMode((prevMode) => !prevMode); // 다크모드 on/off 토글
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={changemode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Darkmode;
