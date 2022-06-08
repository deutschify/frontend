import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ResultList } from "./ResultList";
// import { Example } from "./Example";
// import { MeaningList } from "./MeaningList";
// import { Synonym } from "./Synonym";
// import { Antonym } from "./Antonym";
import "./dictionary.scss";
export const Dictionary = () => {
    const [value, setValue] = useState("");
    const { inputValue, setInputValue } = useContext(AppContext);
    const handleInputChange = (e) => setValue(e.target.value);
    const handleSubmit = () => {
        setInputValue(value);
        setValue("");
    };
    const handleInputKeyDown = (e) => {
        if (e.key === "Enter") {
            setInputValue(value);
            setValue("");
        }
    };
    return (
        <div className="dictionary">
            <div className="dicteonary-input">
                <input
                    id="dic-input"
                    type="text"
                    placeholder="Search"
                    onChange={handleInputChange}
                    value={value}
                    onKeyDown={handleInputKeyDown}
                />
                <button id="dic-button" onClick={handleSubmit}>
                    Search
                </button>
            </div>
            {inputValue && (
                <>
                    <h3>
                        Result for:<span>{inputValue}</span>
                    </h3>
                    <ResultList />
                </>
            )}
        </div>
    );
};
