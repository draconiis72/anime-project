import React from "react";

export default function LoginForm() {
    return(
        <fieldset>
            <legend>Login Form</legend>
            <form>
                <p>
                    <label>UserName</label>
                    <input>type="text" name="username"</input>
                </p>
                <p>
                    <label>E-Mail</label>
                    <input>type="email" name="email"</input>
                </p>
                <p>
                    <label>Password</label>
                    <input>type="password" name="password"</input>
                </p>
                <p>
                    <label>Confirm Password</label>
                    <input>type="password" name="confirmPassword"</input>
                </p>
                <button type="submit">
                    Register
                </button>
            </form>
        </fieldset>
    )
};