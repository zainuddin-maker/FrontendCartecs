import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/main/App";

import Upload from "../src/app/pages/home/uploadimage";
import Dropdown from "../src/app/components/dropdown/dropdownprofile";
import Dropkategori from "../src/app/components/dropdown/dropkategori";
import Get from "../src/app/components/coba/getrequest";
import Cobag from "../src/app/pages/auth/register/coballl";



import * as serviceWorker from "./serviceWorker";
import "./assets/css/font.css";

import { ConnectedRouter } from "connected-react-router/immutable";
import { BrowserRouter } from "react-router-dom";
import { history } from "app/utils";
import configureStore from "redux/configureStore";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const initialState = {};
const store = configureStore(initialState, history);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
