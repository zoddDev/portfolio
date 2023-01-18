import "./index.css";

import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { About } from "./About";
import { Technologies } from "./Technologies";
import { Projects } from "./Projects";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Header />
              <About />
              <Technologies />
              <Projects />
            </Navbar>
          }
        />
      </Routes>
    </>
  );
};

export default App;
