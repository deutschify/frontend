import { NavLink, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Levels from "./components/Levels";
import AskForHelp from "./components/AskForHelp";
import Books from "./components/Books";
import {Einbuergerungstest} from "./components/Einbuergerungstest";
import Settings from "./components/Settings";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

import { Dictionary } from "./components/dictionary/Dictionary";
//import { ResultList } from "./components/dictionary/ResultList";

import "./App.scss";

function App() {
    return (
        <div className="App">

            <Header />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/levels/*" element={<Levels />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/askforhelp" element={<AskForHelp />} />
                <Route path="/books" element={<Books />} />
                <Route path="/einbuergerungstest/*" element={<Einbuergerungstest />} />
                <Route path="/settings" element={<Settings />} />

                {/* <Route path="*" element={<Register />} /> */}
                <Route path="/register/*" element={<Register />} />
                <Route path="/login/*" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
