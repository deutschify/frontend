import { NavLink, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Test } from "./components/Test";
<<<<<<< HEAD
import Search from './components/einbuergerungstest'
// import Einbuergerungstest from "./components/einbuergerungstest"
=======

import Search from './components/einbuergerungstest'
// import Einbuergerungstest from "./components/einbuergerungstest"

import {createContext, useState}from 'react'
import { Dictionary } from "./components/Dictionary";
import { ResultList } from './components/ResultList';

>>>>>>> main
import "./App.scss";
// Create context
export const InputContext =createContext()

function App() {
    const [inputValue, setInputValue] = useState("");
    const value = { inputValue, setInputValue };
console.log(inputValue)
    return (
        <div className="App">
<<<<<<< HEAD
            <Register/>
            <Search/>
            {/* <Test /> */}
            
=======

            <Search/>
            {/* <Test /> */}
            

        {/* <Dictionary/>
        <Test/> */}
            <Routes>
                <Route path="*" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login/*" element={<Login />} />
            </Routes>

>>>>>>> main
        </div>
    );
}

export default App;
