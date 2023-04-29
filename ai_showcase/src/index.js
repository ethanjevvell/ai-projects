import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
