import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";

import { AppRouter } from "@routing/app-router";

import "./styles/main.scss";

ReactDOM.render(<AppRouter />, document.getElementById("root"));
