import React, { useState } from "react";
import { HamburgerIcon } from "react-hamburger-icon";
import { FiLogIn } from "react-icons/fi";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import Levels from "./Levels";
import { Dictionary } from "./dictionary/Dictionary";

import AskForHelp from "./AskForHelp";
import { Books } from "./Books";
import Search from "./einbuergerungstest";
import Settings from "./Settings";

const Header = () => {
    //state for the hamburger icon
    const [open, setOpen] = useState(false);
    //state for the search baseURL
    const [search, setSearch] = useState("");

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
        cursor: "pointer"
    };
    const searchBarStyles = {
        position: "absolute",
        top: "-0.3rem",
        left: "48rem",
    };

    // to make the fucking logIn Icon clickable, we need to use the navigate
    const navigate = useNavigate();
    const logInHandler = () => {
        navigate("/login");
    };

    return (
        <>
            <div className="header" style={headerStyles}>
                Header
                {/* Form for the search bar in the header*/}
                <form
                    style={searchBarStyles}
                    className="searchForm"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        type="text"
                        id="search"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>

            {/* <GrLogin style={logInStyles} onClick={logInHandler} /> */}

            <div className="sign-in" style={logInStyles} onClick={logInHandler}>
                <span>Log In</span>
                <FiLogIn />
            </div>

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
                        position: "absolute"
                    }}
                >
                    <ul onClick={() => setOpen(false)}>
                        <>
                            <li style={{ marginBottom: "10px" }}>
                                <NavLink to="/home" element={<Homepage />}>
                                    Homepage
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/levels" element={<Levels />}>
                                    Language Levels
                                </NavLink>
                            </li>{" "}
                            <li>
                                <NavLink to="/dictionary" element={<Dictionary />}>
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
                        </>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
