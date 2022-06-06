import { useState } from "react";

import QuestionDE from "../data/einbuergerungstestJSON/einbuergerungstestDeutschland";

const Search = () => {
    const [query, setQuery] = useState("");

    return (
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
                        {testQuestion.question}
                    </div>
                );
            })}
        </div>
    );
};

export default Search;
