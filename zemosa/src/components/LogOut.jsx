import { CgLogOut } from "react-icons/cg";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const LogOut = ({ logOut }) => {
    // const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut(false);
        navigate("/home");
    };

    return (
        <div className="logout" onClick={handleLogOut}>
            {/* <span>Log Out</span> */}
            <CgLogOut title="Log out" />
        </div>
    );
};
