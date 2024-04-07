import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Registerpage from './Components/RegisterPage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import ForgotPasswordPage from './Components/ForgotPasswordPage';
import ResetPassword from './Components/ResetPassword';
import UrlShortener from './Components/UrlShorterner';
import NavBar from './Components/Navbar';
import AdminDashboard from './Components/AdminDashboard';
import Url from './Components/Url'
import UrlDashboard from './Components/UrlDashboard';

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
  }, [token, username, email]);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registerpage />} />
          <Route path='/login' element={<LoginPage SetUserName={setUsername} SetEmail={setEmail} SetToken={setToken} />} />
          <Route path='/home' element={<><NavBar /><HomePage username={username} email={email} /></>} />
          <Route path='/forgot' element={<ForgotPasswordPage />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/urlshortener/:email' element={<><NavBar /><UrlShortener email={email} /></>} />
          <Route path='/dashboard' element={<><NavBar /><AdminDashboard token={token} setResponseData={setResponseData} /></>}>
            <Route path='url' element={<Url responseData={responseData} />} /> 
            <Route path='urldashboard' element={<UrlDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;