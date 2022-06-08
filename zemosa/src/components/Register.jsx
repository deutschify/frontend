
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Login } from "./Login";
import {AppContext} from '../context/AppContext'

// how should the inputs look? This Schema is for declaring what the inputs look like
const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    birthDate: yup
        .date()
        .typeError("please enter a valid date")
        .required()
        .min("1969-03-01", "Date is too early"),
    language: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(3).max(16).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const Register = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const {languages, setTranslatedLanguage, translatedLanguage} = useContext(AppContext);

    const navigate = useNavigate();

    //destructuring in order to use the properties of useForm
    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = async (data) => {
        console.log(data);

        //extract these propertes from the object data inorder to save it in our json server
        const { firstName, lastName, birthDate, email, password, language } = data;

        // save it to our Json server
        await axios.post("http://localhost:5050/users", {
            firstName,
            lastName,
            email,
            password,
            birthDate,
            language
        });

        setIsRegistered(true);
        navigate("/login");
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
                            autoComplete="off"
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
                            autoComplete="off"
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
                            type="date"
                            name="birthDate"
                            autoComplete="off"
                            {...register("birthDate")}
                        />
                        <div className="error-notification">
                            <p>{errors.birthDate?.message}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <select
                            {...register("language")}
                            onChange={(e) =>
                                setValue("select", e.target.value, {
                                    shouldValidate: true,
                                })
                            } // Using setValue
                        >
                        {languages.map(language => {
                            return <option key={language.code} value={`${language.code}`}> {language.name}</option>
                        })}
                        </select>
                        <div className="error-notification">
                            <p>{errors.language?.message}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            className="login-input"
                            type="email"
                            name="email"
                            autoComplete="off"
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
                            autoComplete="off"
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
                            autoComplete="off"
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
