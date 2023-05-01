import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage";

import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(false);
  }, [location]);

  useEffect(() => {
    if (isMounted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsMounted(true);
    }
  }, [isMounted]);

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
