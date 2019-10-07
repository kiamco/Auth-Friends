import React, { useState, useEffect } from 'react';


const Login = props => {
    const [loginInfo, setLoginInfo] = useState({
        login: '',
        password: ''
    }
    );


    const onChange = (event) => {
        setLoginInfo({ [event.target.name]: event.target.value });
    }

    const handleSubmit = () => {

    }

    return (
        <form>
            <label for="username"><b>Username</b></label>
            <input
                type="text"
                placeholder="Enter Username"
                name="username"
                onChange={onChange}
                required />

            <label for="password"><b>Password</b></label>
            <input type="password"
                placeholder="Enter Password"
                name="password"
                onChange={onChange}
                required />

            <button type="submit">Login</button>
        </form>
    )
}


export default Login;