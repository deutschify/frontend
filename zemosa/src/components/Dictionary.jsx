import { useState, useContext } from "react";
import { InputContext } from "../App";
export const Dictionary = () => {
    const [value, setValue] = useState("");
    const { inputValue, setInputValue } = useContext(InputContext);
    const handleInputChange = (e) => setValue(e.target.value);
    const handleSubmit = () => {
        setInputValue(value);
        setValue("");
    };
    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {setInputValue(value);
        setValue("")}
    };
    return (
        <div className="dictionary">
            <div className="dicteonary-input">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={handleInputChange}
                    value={value}
                    onKeyDown={handleInputKeyDown}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {inputValue && (
                <h3>
                    Result for:<span>Happy</span>
                </h3>
            )}
        </div>
    );
};
