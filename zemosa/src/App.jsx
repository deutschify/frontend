// import {NavLink, Route, Routes} from 'react-router-dom';
// import Login from "./components/Login";
import {Register} from "./components/Register";
import { Test } from "./components/Test";
import Search from './components/einbuergerungstest'
// import Einbuergerungstest from "./components/einbuergerungstest"
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Register/>
            <Search/>
            {/* <Test /> */}
            
        </div>
    );
}

export default App;
