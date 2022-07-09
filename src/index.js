import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from "./Homepage";
import Moviesdetail from "./Moviesdetail";

function App() {
    return (
            <BrowserRouter>
            <Routes>
            <Route path="/moviesdetail/:id" element={<Moviesdetail />}/> 
                <Route path="/" element={<Homepage />}/> 
            </Routes>
            </BrowserRouter>
        );
}
render(<App />, document.getElementById("root"));