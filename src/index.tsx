import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { store } from "./store/index"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Provider>
);
