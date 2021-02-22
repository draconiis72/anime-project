import React, {useState} from "react";
import axios from "axios";

const SignUp = props => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const register = event => {
        event.preventDefault();
        console.log({username});

        const newUser = {username, email, password, confirmPassword};

        axios
            .post("http://localhost:8000/api/register", newUser, {
                withCredentials: true
        })
        .then(res => {
            console.log(res);
            setUserName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        })
        .catch(err => {
            console.log(err);
            setErrors(err.response.data.errors);
        });
    };

    return (
        <fieldset>
            <legend>Sign Up</legend>
            <form onSubmit={register}>
                <div className="form-group">
                    <label>UserName:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={e => setUserName(e.target.value)}
                        value={username}
                    />
                    {errors.username ? (
                        <span>{errors.username.message}</span>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    {errors.email ? (
                        <span>{errors.email.message}</span>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    {errors.password ? (
                        <span>{errors.password.message}</span>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    {errors.confirmPassword ? (
                        <span>{errors.confirmPassword.message}</span>
                    ) : (
                        ""
                    )}
                </div>
                <input type="submit" value = "SignUp" className="btn"/>
            </form>
        </fieldset>
    );
};

export default SignUp;