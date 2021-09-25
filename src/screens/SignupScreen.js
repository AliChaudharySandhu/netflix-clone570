import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignupScreen.css'

function SignupScreen(props) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null); 

    const register =(e) =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) =>{
            // console.log(authUser)
        }).catch(error => alert(error))
    };

    const singnIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) =>{
            // console.log(authUser)

        }).catch(error => alert(error))
    }
    return (
        <div className="signupScreen">
            <form action="">
                <h1>Sign In</h1>
                <input  ref={emailRef} type="Email" placeholder="Email" defaultValue={props.email}/>
                <input  ref={passwordRef} type="password" placeholder="password" />
                <button onClick={singnIn} type="submit">Sign In</button>

                <h4><span className="signupScreen_gray">New to Netflix?</span> 
                <span onClick={register} className="signupScreen_link"> Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen
