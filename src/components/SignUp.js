// import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState, React } from 'react'
import { useUserAuth } from '../context/UserAuthContext';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

function SignUp() {








    // const [emailIn, setEmailIn] = useState("");
    const [emailUp, setEmailUp] = useState("");
    // const [passIn, setPassIn] = useState("");
    const [passUp, setPassUp] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signUp } = useUserAuth();
    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(emailUp, passUp);
            navigate("/");

        } catch (err) {
            setError(err.message);
        }

    }
    return (
        <div>
            <h1>
                SignUp
            </h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                {
                    error && <Stack style={{marginLeft:'auto',marginRight:'auto'}} sx={{ width: '100%' }} spacing={2}>
                        <Alert  severity="error">error alert : {error}</Alert></Stack>
                }
                <TextField id="outlined-basic" onChange={(e) => { setEmailUp(e.target.value) }} label="Email" variant="outlined" />
                <TextField id="filled-basic" onChange={(e) => { setPassUp(e.target.value) }} label="PassWord" variant="filled" />
                <input type="submit" onClick={handleSignUp} className="button" value="Sign Up" />
            </Box>

        </div>

    )
}

export default SignUp