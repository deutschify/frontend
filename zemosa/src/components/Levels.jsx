import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import { Login } from "./Login";
const Levels = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

    return <>{isLoggedIn ? <h2>Levels</h2> : <Login />}</>;
};

export default Levels;
