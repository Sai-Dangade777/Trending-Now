import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("general");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar setCategory={setCategory} theme={theme} setTheme={setTheme} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
