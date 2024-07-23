import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createstore } from "redux";
import {thunk} from "redux-thunk";
import Reducers from "./Reducers";
import { GoogleOAuthProvider } from '@react-oauth/google';
import reportWebVitals from './reportWebVitals';

const store = createstore(Reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="618600735698-7gjrksfqamcerpuv24vi0l42dda0rc1g.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </GoogleOAuthProvider>
  </Provider>
);

reportWebVitals();
