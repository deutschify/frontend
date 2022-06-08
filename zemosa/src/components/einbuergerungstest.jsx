import { NavLink, Route, Routes } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./einbuergerungstest.scss";
import { Login } from "./Login";
import QuestionDE from "../data/einbuergerungstestJSON/einbuergerungstestDeutschland";

const Search = () => {
    // Import from AppContext the success state variable in order to show if someone is logged in
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const [selectBundesland, setSelectBundesland] = useState({display: 'none'})
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
                    <p className="bundesland bw" onMouseEnter={() => {
                        setSelectBundesland({display: 'block'})
                    }} onMouseLeave={() => {
                        setSelectBundesland({display: 'none'})
                    }}>Baden-Württemberg</p>

                    
                    {/* <p className="bundesland bayern">Bayern</p>
                    <p className="bundesland berlin">Berlin</p>
                    <p className="bundesland brandenburg">Brandenburg</p>
                    <p className="bundesland bremen">Bremen</p>
                    <p className="bundesland hamburg">Hamburg</p>
                    <p className="bundesland hessen">Hessen</p>
                    <p className="bundesland mv">Mecklenburg-Vorpommern</p>
                    <p className="bundesland niedersachsen">Niedersachsen</p>
                    <p className="bundesland nrw">Nordrhein-Westfalen</p>
                    <p className="bundesland rp">Rheinland-Pfalz</p>
                    <p className="bundesland saarland">Saarland</p>
                    <p className="bundesland sachsen">Sachsen</p>
                    <p className="bundesland sa">Sachsen-Anhalt</p>
                    <p className="bundesland sh">Schleswig-Holstein</p>
                    <p className="bundesland th">Thüringen</p> */}
                </div>
            </div>
        </>
    );
};

export default Search;
