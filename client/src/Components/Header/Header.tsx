import { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "dark") {
      setMode("dark");
    }
  }, []);

  return (
    <header className="flex justify-center items-center shadow relative z-10">
      <HeaderContainer className="container flex justify-between py-5">
        <h1 className="logo font-extrabold text-lg">Where in the world?</h1>
        <div
          className="mode flex items-center gap-5 select-none cursor-pointer"
          onClick={handleMode}
        >
          <span className={`${mode === "light" ? "hidden" : ""}`}>
            <DarkModeIcon />
          </span>
          <span className={`${mode === "dark" ? "hidden" : ""}`}>
            <DarkModeOutlinedIcon />
          </span>
          Dark Mode
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
