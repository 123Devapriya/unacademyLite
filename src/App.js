// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import SignUp from './components/SignUp';
import {UserAuthContextProvider, useUserAuth} from "./context/UserAuthContext"
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Videos from './components/videos/Videos';
import Admin from './components/videos/Admin';
function App() {
  return (
    <div className="App">

      <Container>
        <Row>

          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/signup" element={<SignUp />} />

                <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                
                <Route path="/home/videos" element={<ProtectedRoute><Videos/></ProtectedRoute>}/>
                <Route path="/admin" element={<Admin/>} />

              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
