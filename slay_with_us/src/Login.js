import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory  } from "react-router-dom";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }


    return (
        <div className="login">
             <Link to='/'>
                 <div className="login__logo_SWU">
                 <AcUnitIcon className="login__logo"/>
                <h4>SLAY WITH US</h4>
                 </div>

             </Link>


                <div className='login__container'> 
                <h1>Sign-in</h1>
                <form>
                <h5>E-mail</h5>
                <input type = "text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type = "password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' onClick={signIn}  className='login__signInButton'>Sign In</button>

                </form>
                <p>  You agree to the Use & Sales Terms of SLAY WIth US by signing-in.Please
                    see our Privacy Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Account</button>

                </div>
        </div>
    )
}

export default Login
