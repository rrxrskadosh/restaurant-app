import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//React Router DOM
import { BrowserRouter as Router } from "react-router-dom";
//App
import App from "./App";
//Context and Redux
import { StateProvider } from "./context/stateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

ReactDOM.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <StrictMode>
                <App />
            </StrictMode>
        </StateProvider>
        
    </Router>, document.getElementById('root')
); 

