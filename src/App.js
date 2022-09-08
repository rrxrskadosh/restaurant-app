import React from "react";
//Components
import { Header, MainContainer, CreateContainer } from "./components";
import { Routes, Route } from "react-router-dom";
import './index.css';

const App = () => {
    return(
        <div className="w-screen h-auto flex flex-col bg-primary">
            <Header />

            <main className="mt-20 p-6 w-full">
                <Routes>
                    <Route path="/*" element={<MainContainer />} />
                    <Route path="/create-item" element={<CreateContainer />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;