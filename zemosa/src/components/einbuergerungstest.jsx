import { NavLink, Route, Routes } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./einbuergerungstest.scss";
import { Login } from "./Login";
import QuestionDE from "../data/einbuergerungstestJSON/einbuergerungstestDeutschland";

const Search = () => {
    // Import from AppContext the success state variable in order to show if someone is logged in
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

    // const [query, setQuery] = useState("");

    return (
        <>
            <div className="einbuergerungstest">
                <h1 className="title">Einbürgerungstest</h1>
                <div className="map">
                    <img
                        className="imgGermanMap"
                        src="../../public/images/deutschlandMap.png"
                    />
                    <p className="bw">Baden-Württemberg</p>
                    <p className="bayern">Bayern</p>
                    <p className="berlin">Berlin</p>
                    <p className="brandenburg">Brandenburg</p>
                    <p className="bremen">Bremen</p>
                    <p className="hamburg">Hamburg</p>
                    <p className="hessen">Hessen</p>
                    <p className="mv">Mecklenburg-Vorpommern</p>
                    <p className="niedersachsen">Niedersachsen</p>
                    <p className="nrw">Nordrhein-Westfalen</p>
                    <p className="rp">Rheinland-Pfalz</p>
                    <p className="saarland">Saarland</p>
                    <p className="sachsen">Sachsen</p>
                    <p className="sa">Sachsen-Anhalt</p>
                    <p className="sh">Schleswig-Holstein</p>
                    <p className="th">Thüringen</p>
                </div>
            </div>
        </>
    );
};

export default Search;
