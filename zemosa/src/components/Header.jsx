import React, { useState } from "react";
import { HamburgerIcon } from "react-hamburger-icon";
import { FaHeart } from "react-icons/fa";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import Levels from "./Levels";
// import { Dictionary } from "./dictionary/Dictionary";
import { ResultList } from "./dictionary/ResultList";

import AskForHelp from "./AskForHelp";
import { Books } from "./Books";
import Search from "./einbuergerungstest";
import Settings from "./Settings";
import { Login } from "./Login";

const Header = () => {
    const [open, setOpen] = useState(false);
    const headerStyles = {
        backgroundColor: "#ddd",
        color: "red",
        fontSize: "1.6rem",
        textAlign: "center",
        position: "relative",
    };
    const burgerStyles = {
        position: "absolute",
        top: "0.5%",
        left: "0.5%",
    };
    const logInStyles = {
        position: "absolute",
        top: "0.5%",
        right: "0.5%",
    };
    // to make the fucking logIn Icon clickable, we need to use the navigate

    // const navigateComponent = () => {
    //     const navigate = useNavigate();

    //     const logInHandler = () => {
    //         navigate("/login");
    //     };
    // };
    const hello = () => {
        console.log("hello");
    };

    return (
        <>
            <div className="header" style={headerStyles}>
                Header
            </div>

            <FaHeart style={logInStyles} onClick={hello} />

            <HamburgerIcon
                style={burgerStyles}
                open={open}
                onClick={() => setOpen(!open)}
            />
            {open && (
                <div
                    className="ham-list"
                    style={{
                        height: "600px",
                        width: "300px",
                        backgroundColor: "#ddd",
                        marginLeft: "5px",
                        zIndex: "99",
                    }}
                >
                    <ul>
                        <li style={{ marginBottom: "10px" }}>
                            <NavLink to="/" element={<Homepage />}>
                                Homepage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/levels" element={<Levels />}>
                                Language Levels
                            </NavLink>
                        </li>{" "}
                        <li>
                            <NavLink to="/dictionary" element={<ResultList />}>
                                Dictionary
                            </NavLink>
                        </li>{" "}
                        <li>
                            <NavLink to="/askforhelp" element={<AskForHelp />}>
                                Ask for help
                            </NavLink>
                        </li>{" "}
                        <li>
                            <NavLink to="/books" element={<Books />}>
                                Books
                            </NavLink>
                        </li>{" "}
                        <li>
                            <NavLink
                                to="/einbuergerungstest"
                                element={<Search />}
                            >
                                Einbürgerungstest
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" element={<Settings />}>
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
