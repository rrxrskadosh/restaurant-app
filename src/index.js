import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
    <Router>
        <StrictMode>
            <App />
        </StrictMode>
    </Router>, document.getElementById('root')
); 

