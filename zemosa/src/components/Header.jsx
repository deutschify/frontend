import "../App.scss";
import React, { useState, useContext } from "react";
import { HamburgerIcon } from "react-hamburger-icon";
import { FiLogIn, FiPower } from "react-icons/fi";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import Levels from "./Levels";
import { Dictionary } from "./dictionary/Dictionary";
import { AppContext } from "../context/AppContext";
import AskForHelp from "./AskForHelp";
import { LogOut } from "./LogOut";
import { Books } from "./Books";
import { Einbuergerungstest } from "./Einbuergerungstest";
import Settings from "./Settings";

const Header = () => {
    //state for the hamburger icon
    const [open, setOpen] = useState(false);
    //state for the Einbürgerungstest baseURL
    const [search, setSearch] = useState("");

    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

    const headerStyles = {
        fontSize: "1.6rem",
        textAlign: "center",
        position: "fixed",
        padding: "2.2rem",
    };
    const burgerStyles = {
        position: "absolute",
        top: "0.5%",
        left: "0.5%",
        margin: " 2rem  2rem ",
        position: "fixed",
        zIndex: "1",
    };
    const logInStyles = {
        position: "absolute",
        top: "0.5%",
        right: "0.5%",
        cursor: "pointer",
        margin: " 2rem  2rem ",
        position: "fixed",
        zIndex: "1",
    };
    const searchBarStyles = {
        position: "absolute",
        top: "-0.5rem",
        left: "48rem",
        margin: " 2rem  2rem ",
    };

    // to make the fucking logIn Icon clickable, we need to use the navigate
    const navigate = useNavigate();
    const logInHandler = () => {
        navigate("/login");
    };

    return (
        <>
            <div className="header" style={headerStyles}>
                {/* Form for the search bar in the header*/}
                <form
                    style={searchBarStyles}
                    className="searchForm"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        className="login-input "
                        type="text"
                        id="search-header"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>

            {/* <GrLogin style={logInStyles} onClick={logInHandler} /> */}

            <div className="sign-in" style={logInStyles}>
                {isLoggedIn ? (
                    <LogOut logOut={setIsLoggedIn} />
                ) : (
                    <div className="login" onClick={logInHandler}>
                        {/* <span>Log In</span> */}
                        <FiLogIn title="Login" />
                    </div>
                )}
            </div>

            <HamburgerIcon
                className="listIcon"
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

                        marginLeft: "5px",
                        position: "absolute",
                        zIndex: "1",
                        margin: " 3rem  2rem ",
                        borderRadius: "10%",
                    }}
                >
                    <ul className="ul-header" onClick={() => setOpen(false)}>
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
                                <NavLink
                                    to="/dictionary"
                                    element={<Dictionary />}
                                >
                                    Dictionary
                                </NavLink>
                            </li>{" "}
                            <li>
                                <NavLink
                                    to="/askforhelp"
                                    element={<AskForHelp />}
                                >
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
                                    element={<Einbuergerungstest />}
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
