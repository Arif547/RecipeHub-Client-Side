import { useState, useEffect } from "react";


import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const DarkMode = () => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
    // document.querySelector("html").setAttribute("data-theme", theme);

    // document.documentElement.classList.toggle("dark", localTheme === "dark");
  }, [theme]);

  return (
    <div>
      <button className="btn btn-square btn-ghost">
        <label className="swap swap-rotate w-12 h-12">
          <input
            type="checkbox"
            onChange={handleToggle}
            // show toggle image based on localstorage theme
            checked={theme === "light" ? false : true}
          />
          {/* light theme sun image */}
          <img src={sun} alt="light" className="w-8 h-8 swap-on" />
          {/* dark theme moon image */}
          <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
        </label>
      </button>
    </div>

  );
};
export default DarkMode;