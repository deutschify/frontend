import { NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Login } from "./Login";

// how should the inputs look? This Schema is for declaring what the inputs look like
const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(3).max(16).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const Register = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    //destructuring in order to use the properties of useForm
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = async (data) => {
        console.log(data);

        //extract these propertes from the object data inorder to save it in our json server
        const { firstName, lastName, email, password } = data;

        // save it to our Json server
        await axios.post("http://localhost:5000/users", {
            firstName,
            lastName,
            email,
            password,
        });

        setIsRegistered(true);
    };

    return (
        <div className="form-container">
            <div className="login"></div>
            <div className="login">
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="form-group">
                        <h3>Sign Up</h3>
                        <input
                            className="login-input"
                            type="text"
                            name="firstName"
                            autoComplete="on"
                            placeholder="First name"
                            {...register("firstName")}
                        />
                        <div className="error-notification">
                            <p>{errors.firstName?.message}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            className="login-input"
                            type="text"
                            name="lastName"
                            autoComplete="on"
                            placeholder="Last name"
                            {...register("lastName")}
                        />
                        <div className="error-notification">
                            <p>{errors.lastName?.message}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            className="login-input"
                            type="email"
                            name="email"
                            autoComplete="on"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <div className="error-notification">
                            <p>{errors.email?.message}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            className="login-input"
                            type="password"
                            name="password"
                            autoComplete="on"
                            placeholder="Password"
                            {...register("password")}
                        />
                        <div className="error-notification">
                            <p>{errors.password?.message}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            className="login-input"
                            type="password"
                            name="confirmPassword"
                            autoComplete="on"
                            placeholder="Confirm Password"
                            {...register("confirmPassword")}
                        />
                        <div className="error-notification">
                            <p>
                                {errors.confirmPassword &&
                                    "password don't match"}
                            </p>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            className="login-input"
                            type="submit"
                            value="Sign Up"
                        />
                    </div>
                </form>
                <div className="form-group">
                    <span>
                        Already have an Account? <br />
                        <span className="line">
                            <NavLink to="/login">Sign In</NavLink>
                        </span>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </span>
                </div>
            </div>
        </div>
    );
};

// export default Register;
