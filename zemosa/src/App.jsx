import { NavLink, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
// import { Register } from "./components/Register";
// import { Login } from "./components/Login";
// import { Test } from "./components/Test";
// import Search from "./components/einbuergerungstest";
// import { Dictionary } from "./components/dictionary/Dictionary";
// import { ResultList } from "./components/dictionary/ResultList";

import "./App.scss";
// Create context

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
