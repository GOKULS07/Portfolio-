import React, { useEffect } from "react";
import "./DarkModeToggle.css";

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  // Use `useEffect` to apply/remove the `dark-mode` class to the `body` element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        id="dark-mode-toggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="dark-mode-toggle">
        <span className="toggle-track">
          <span className="toggle-indicator">
            <span className="checkMark">{darkMode ? "🌙" : "☀️"}</span>
          </span>
        </span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
