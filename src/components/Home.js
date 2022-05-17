import React,{useState} from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
    const {user,logout} = useUserAuth();
    const [error, setError] = useState("")
    const navigate = useNavigate();
    // console.log(user.email)
    const handleLogout=async (e)=>{
        e.preventDefault();
        setError("");
        try {
            await logout();
            navigate("/");

        } catch (err) {
            setError(err.message);
        }
    }



  return (
    <div>
        <Navbar/>
        Welcome<h1>{user.email} {error&& <p>{error}</p>}</h1>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home