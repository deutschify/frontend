import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Test } from "./Test";

const usersUrl = "http://localhost:5000/users";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const [users, setUsers] = useState([]);

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

        users.find((acc) => {
            if (acc.firstName === user && acc.password === pwd) {
                setSuccess(true);
                console.log(user, pwd);
            } else {
                setErrMsg("first name or password doesn't match. Try again!");
            }
        });
    };

    return (
        <>
            {success ? (
                <Test />
            ) : (
                <div className="form-container">
                    <div className="login">
                        <h3>Sign In</h3>
                    </div>
                    <div className="login">
                        <p
                            ref={errRef}
                            className={errMsg ? "errMsg" : "offscreen"}
                        >
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
                                <div className="error-notification">
                                    {/* <p>{errors.firstName?.message}</p> */}
                                </div>
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
                                <div className="error-notification">
                                    {/* <p>{errors.password?.message}</p> */}
                                </div>
                            </div>

                            <input type="submit" value="Sign In" />
                        </form>
                        <p>
                            Need an Account? <br />
                            <span className="line">
                                {/* Ein Router for Register */}
                                Ein Router for Register
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};
export default Login;
