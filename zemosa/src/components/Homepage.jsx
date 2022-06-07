import { NavLink, Route, Routes } from "react-router-dom";

import { Register } from "./Register";
import { Login } from "./Login";
import { Test } from "./Test";
import Search from "./einbuergerungstest";
import { Dictionary } from "./dictionary/Dictionary";
import { ResultList } from "./dictionary/ResultList";
const Homepage = () => {
    return (
        <>
            <h2>HomePage</h2>

            <Search />
            <ResultList />
            <Dictionary />
            <Test />
            <Routes>
                <Route path="*" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login/*" element={<Login />} />
            </Routes>
        </>
    );
};

export default Homepage;
