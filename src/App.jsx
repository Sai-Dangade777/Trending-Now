import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import "./App.css"; // Import global styles

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div className="app">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
