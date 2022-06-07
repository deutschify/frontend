import React, { useState } from "react";
import { HamburgerIcon } from "react-hamburger-icon";
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
        </>
    );
};

export default Header;
