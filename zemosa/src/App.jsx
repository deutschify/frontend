import { NavLink, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Test } from "./components/Test";
<<<<<<< HEAD
<<<<<<< HEAD
import Search from './components/einbuergerungstest'
// import Einbuergerungstest from "./components/einbuergerungstest"
=======
=======
>>>>>>> refs/remotes/origin/zubi_einbuergerungstest

import Search from './components/einbuergerungstest'
// import Einbuergerungstest from "./components/einbuergerungstest"

import {createContext, useState}from 'react'
import { Dictionary } from "./components/Dictionary";
import { ResultList } from './components/ResultList';

<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> refs/remotes/origin/zubi_einbuergerungstest
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
<<<<<<< HEAD
            <Register/>
            <Search/>
            {/* <Test /> */}
            
=======
=======
>>>>>>> refs/remotes/origin/zubi_einbuergerungstest

            <Search/>
            {/* <Test /> */}
            

        {/* <Dictionary/>
        <Test/> */}
            <Routes>
                <Route path="*" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login/*" element={<Login />} />
            </Routes>

<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> refs/remotes/origin/zubi_einbuergerungstest
        </div>
    );
}

export default App;
