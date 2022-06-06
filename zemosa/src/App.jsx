import {createContext, useState}from 'react'
import { Dictionary } from "./components/Dictionary";
import { ResultList } from './components/ResultList';
import "./App.scss";
// Create context
export const InputContext =createContext()

function App() {
    const [inputValue, setInputValue] = useState("");
    const value = { inputValue, setInputValue };
console.log(inputValue)
    return (
        <InputContext.Provider value={value}>
            <div className="App">
                <Dictionary />
                <ResultList/>
            </div>
        </InputContext.Provider>
    );
}

export default App;
