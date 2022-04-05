import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./store/index";
import "./index.css";
import App from "./App";

/**
 * Every descendant of the Provider Component will have access to the store
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
