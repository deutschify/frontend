import { NavLink, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Test } from "./components/Test";
import { Dictionary } from "./pages/Dictionary";
import "./App.scss";

function App() {
    return (
        <div className="App">
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
