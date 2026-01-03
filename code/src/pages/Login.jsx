import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

function Login(){
    const {login} = useContext(AuthContext);

    return (
        <div style={{padding:"20px"}}>
            <h2>Login Page</h2>
            <button onClick={login}>Click to login</button>
        </div>
    );
}


export default Login;