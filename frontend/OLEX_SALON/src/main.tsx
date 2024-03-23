import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import App from "./App.tsx";
import "./index.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Theme>
    <App />
  </Theme>
);
