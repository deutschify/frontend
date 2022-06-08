import { NavLink, Route, Routes } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FiInfo } from "react-icons/fi";

import { Login } from "./Login";
import QuestionDE from "../data/einbuergerungstestJSON/einbuergerungstestDeutschland";

const Search = () => {
    // Import from AppContext the success state variable in order to show if someone is logged in
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const { text, translate, translatedText, setText, setTranslatedLanguage } = useContext(AppContext);

    const [query, setQuery] = useState("");

    return (
        <>
            {isLoggedIn ? (
                <div className="searchBar">
                    <h1>Einbürgerungstestfragen</h1>
                    <input
                        type="text"
                        placeholder="search..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {QuestionDE.filter((testQuestion) => {
                        if (query == "") {
                            return testQuestion;
                        } else if (
                            testQuestion.question
                                .toLowerCase()
                                .includes(query.toLowerCase())
                        ) {
                            return testQuestion;
                        } else if (testQuestion.number.includes(query)) {
                            return testQuestion;
                        }
                    }).map((testQuestion) => {
                        return (
                            <div key={testQuestion.number}>
                                {testQuestion.number}: {""}
                                {testQuestion.question} : {""}
                                <FiInfo onClick={() => translate(testQuestion.question) } />
                                {""}
                                <span>{testQuestion.question === text && translatedText}</span>
                                
                                {/* {text && testQuestion.question && translatedText} */}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <Login />
            )}
        </>
    );
};

export default Search;
