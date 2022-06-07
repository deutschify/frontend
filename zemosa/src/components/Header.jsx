import React, { useState } from "react";
import { HamburgerIcon } from "react-hamburger-icon";
import { NavLink, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

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

    return (
        <>
            <div style={headerStyles}>Header</div>

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
                    }}
                >
                    <ul>
                        <li style={{ marginBottom: "10px" }}>
                            <NavLink to="/">Homepage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Language Levels</NavLink>
                        </li>{" "}
                        <li>
                            <NavLink to="/">Dictionary</NavLink>
                        </li>{" "}
                        <li>
                            <NavLink to="/">Ask for Help</NavLink>
                        </li>{" "}
                        <li>
                            <NavLink to="/">Books</NavLink>
                        </li>{" "}
                        <li>
                            <NavLink to="/">Einbürgerungstest</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Settings</NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
