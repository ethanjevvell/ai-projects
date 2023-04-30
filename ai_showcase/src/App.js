import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage";

import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <Routes>
          <Route exact path="/" element={<Projects />} />
          <Route path="/project/:projectName" element={<ProjectPage />} />
        </Routes>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
