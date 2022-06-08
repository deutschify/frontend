import { NavLink, Route, Routes } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FiInfo } from "react-icons/fi";

import './Einbuergerungstest.scss';
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
                    <h1 className="title">Einbürgerungstestfragen</h1>
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="nach einer bestimmten Frage oder Thema suchen..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="allJsonData">
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
                            <div className="jsonData" key={testQuestion.number}>
                                {testQuestion.number}: {""} <br /><br />
                                {testQuestion.question} : {""} <br /><br />
                                <FiInfo onClick={() => translate(testQuestion.question) } />
                                {""}
                                <span>{testQuestion.question === text && translatedText}</span>
                                
                           
                        );
                    })}
                    </div>
                </div>
            ) : (
                <Login />
            )}
        </>
    );
};

export default Search;
