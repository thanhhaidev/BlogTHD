import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as contentful from "contentful";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

var client = contentful.createClient({
  space: "7vbtzj7i5icm",
  accessToken:
    "69656dae0bf5fe7e4f5365294aa3a4ebb89734c217961d3a802249557168ea92"
});

client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if (entry.fields) {
      console.log(entry.fields);
    }
  });
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
