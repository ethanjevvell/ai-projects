import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
