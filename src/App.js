import React from "react";
//Components
import { Header, MainContainer, CreateContainer } from "./components";
//Routes
import { Routes, Route } from "react-router-dom";
//Animation with Framer Motion
import { AnimatePresence } from "framer-motion";
import './index.css';

const App = () => {
    return(
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
                <Header />

                <main className="mt-20 md:mt-20 px-4 md:px-16 py-4 w-full">
                    <Routes>
                        <Route path="/*" element={<MainContainer />} />
                        <Route path="/create-item" element={<CreateContainer />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
        
    )
}

export default App;