import "./style.css";
import "material-symbols/rounded.css";

import App from "./App.svelte";

const app = new App({
  target: document.body,
});

import "./API/resume";

export default app;
