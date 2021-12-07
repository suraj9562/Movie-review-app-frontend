import React, { useState, useEffect } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import {useHistory} from 'react-router-dom';
import { adminLogin } from "../../redux/actions/UserAction";

const AdminLogin = () => { 
  const dispatch = useDispatch();
  const history = useHistory();


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(loginPassword);
    dispatch(adminLogin(loginEmail, loginPassword));
    // console.log("logged in");
  };

  const { loading, error, isAuthenticated, isAdmin } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if(isAdmin){
        history.push("/dashboard")
    }
  }, [error, history, isAdmin]);


  return (
    <div> 
      
        <div className="loginsignUpContainer">
          <div className="loginsignUpBox">
              <div className="adminLoginHead">
                    <h2>Admin Login</h2>
              </div>
            <form className="loginForm" onSubmit={loginSubmit}>
              <div className="loginEmail">
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="loginPassword">
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Login" className="loginButton" />
            </form>
          </div>
        </div>
    </div>
  );
};

export default AdminLogin;

