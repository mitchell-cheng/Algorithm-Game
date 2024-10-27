import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from './components/App';
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App className="m-0 w-full h-full overflow-hidden" />    
  </StrictMode>,
);
