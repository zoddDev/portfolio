import "./index.css";

import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { About } from "./About";
import { Technologies } from "./Technologies";
import { Projects } from "./Projects";
import { Technologies2 } from "./Technologies2";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Header id="header" />
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
