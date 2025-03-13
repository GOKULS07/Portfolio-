import React, { useState } from "react"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import DarkModeToggle from "./components/DarkModeToggle"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <main>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App

