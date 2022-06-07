import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { Test } from "./Test";
import { Register } from "./Register";
import Homepage from "./Homepage";

const usersUrl = "http://localhost:5000/users";

export const Login = () => {
    // Import from AppContext the success state variable in order to show if someone is logged in
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const [users, setUsers] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    useEffect(() => {
        (async () => {
            setUsers((await axios.get(usersUrl)).data);
        })();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(users);

        users.find((acc) => {
            if (acc.firstName === user && acc.password === pwd) {
                console.log(user, pwd);
                setIsLoggedIn(true);
                navigate("/home");
            } else {
                setErrMsg("first name or password doesn't match. Try again!");
            }
        });
    };

    return (
        <>
            <div className="form-container">
                <div className="login">
                    <h3>Sign In</h3>
                </div>
                <div className="login">
                    <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
                        {errMsg}
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                onChange={(e) => setUser(e.target.value)}
                                type="text"
                                name="firstName"
                                autoComplete="on"
                                placeholder="First name"
                                value={user}
                                ref={userRef}
                                required
                            />
                        </div>

                        <div>
                            <input
                                onChange={(e) => setPwd(e.target.value)}
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={pwd}
                                autoComplete="off"
                                required
                            />
                        </div>

                        <input type="submit" value="Sign In" />
                    </form>
                    <span>
                        Need an Account? <br />
                        <span className="line">
                            <span className="line">
                                <NavLink to="/register">Sign Up</NavLink>
                            </span>
                            <Routes>
                                <Route
                                    path="/register"
                                    element={<Register />}
                                />
                            </Routes>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
};
