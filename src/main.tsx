import { render } from "preact";
import { StrictMode } from "preact/compat";
import { App } from "./App";

import "./styles/theme.css";
import "./styles/global.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app")!,
);
