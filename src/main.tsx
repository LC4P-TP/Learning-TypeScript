import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import { store } from "./redux/store";
import i18n from "./utils/locales/i18n";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
);
