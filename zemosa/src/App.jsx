import { NavLink, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Test } from "./components/Test";
import Search from "./components/einbuergerungstest";
import { createContext, useState } from "react";
import { Dictionary } from "./components/Dictionary";
import { ResultList } from "./components/ResultList";

import "./App.scss";
// Create context
export const InputContext = createContext();

function App() {
    const [inputValue, setInputValue] = useState("");
    const value = { inputValue, setInputValue };
    console.log(inputValue);
    return (
        <div className="App">
            <Search />
            {/* <Test /> */}

            {/* <Dictionary/>
        <Test/> */}
            <Routes>
                <Route path="*" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login/*" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
