import { NavLink, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Test } from "./components/Test";
import Search from "./components/einbuergerungstest";
import { Dictionary } from "./components/dictionary/Dictionary";
import { ResultList } from "./components/dictionary/ResultList";

import "./App.scss";
// Create context

function App() {
    return (
        <div className="App">
            <Search />
            <Dictionary />
            <ResultList/>
            <Test />
            <Routes>
                <Route path="*" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login/*" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
