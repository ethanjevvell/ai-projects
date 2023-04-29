import { useContext, useState } from "react";
import { Brightness2, WbSunnyRounded, Menu, Close } from "@mui/icons-material";
import { ThemeContext } from "../../contexts/theme";
import "./Navbar.css";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyRounded /> : <Brightness2 />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <Close /> : <Menu />}
      </button>
    </nav>
  );
};

export default Navbar;
