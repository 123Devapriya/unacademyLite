import {useEffect, useState, React} from 'react'
import { useUserAuth } from '../context/UserAuthContext';
import "./login.css";
import { useNavigate } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function Login() {

    const [emailIn, setEmailIn] = useState("");
    // const [emailUp, setEmailUp] = useState("");
    const [passIn, setPassIn] = useState("");
    // const [passUp, setPassUp] = useState("");
    const [error, setError] = useState("");
    const {login ,signUp } = useUserAuth();
    const navigate = useNavigate();
const handleSignIn = async (e) =>{
    e.preventDefault(); 
    setError("");
    try{
        await login(emailIn,passIn);
        navigate("/home");

    }catch(err){
        setError(err.message);
    }

}
    return (
        <div>
            <div className="login-wrap">
                <div className="login-html">
                {
                    error && <Stack style={{marginLeft:'auto',marginRight:'auto'}} sx={{ width: '100%' }} spacing={2}>
                        <Alert  severity="error">error alert : {error}</Alert></Stack>
                }
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
                        <input id="submit" type="radio"name="tab" className="sign-up"/><label for="tab-2" className="tab"></label>
                            <div className="login-form">
                                <div className="sign-in-htm">
                                    <div className="group">
                                        <label for="user" className="label">Email</label>
                                        <input id="user" onChange={(e)=>{setEmailIn(e.target.value)}} type="text" className="input"/>
                                    </div>
                                    <div className="group">
                                        <label for="pass" className="label">Password</label>
                                        <input id="pass" onChange={(e)=>{setPassIn(e.target.value)}} type="password" className="input" data-type="password"/>
                                    </div>
                                    <div className="group">
                                        <input id="check" type="checkbox" className="check" checked/>
                                            <label for="check"><span className="icon"></span> Keep me Signed in</label>
                                    </div>
                                    <div className="group">
                                        <input type="submit" onClick={handleSignIn}  className="button" value="Sign In"/>
                                    </div>
                                    <div className="group">
                                        <input type="submit" onClick={()=>{navigate("/signup")}} className="button" value="Go to SignUp"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="foot-lnk">
                                        <a href="#forgot">Forgot Password?</a>
                                    </div>
                                </div>
                                {/* <div className="sign-up-htm">
                                    <div className="group">
                                        <label for="user" className="label">Email</label>
                                        <input id="user" onChange={(e)=>{setEmailUp(e.target.value)}} type="text" className="input"/>
                                    </div>
                                    <div className="group">
                                        <label for="pass" className="label">Password</label>
                                        <input id="pass" onChange={(e)=>{setPassUp(e.target.value)}} type="password" className="input" data-type="password"/>
                                    </div>
                                    <div className="group">
                                        <label for="pass" className="label">Repeat Password</label>
                                        <input id="pass" type="password" className="input" data-type="password"/>
                                    </div>
                                   
                                    <div className="group">
                                        <input type="submit" onClick={handleSignUp} className="button" value="Sign Up"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="foot-lnk">
                                        <label for="tab-1">Already Member?</label>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                </div>


            </div>
            )
}

            export default Login