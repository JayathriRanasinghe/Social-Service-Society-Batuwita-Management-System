import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { history } from "./store";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>
  </Provider>
);
