import "./App.css";
import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Movie from "./components/Movie";
import MainLogin from "./components/login/MainLogin";
import AdminLogin from "./components/login/AdminLogin";
import {loadUser} from "./redux/actions/UserAction";
import store from './store';
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./components/admin/Dashboard";
import AddMovie from "./components/admin/AddMovie";
import EditMovie from "./components/admin/EditMovie";

function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  const {isAuthenticated, loading , user, type} = useSelector((state)=>state.user)

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if (mode==="light") {
      setMode("dark");
      setToggleText("Disable Dark Mode");
      document.body.style.backgroundColor = "grey";
      // document.body.style.color = "white";
    }
    else{
      setMode("light");
      setToggleText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <div className="App">
      <Router>
        <Navbar title='Movie Reviewer' aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleText={toggleText} userType={type} isAuthenticated={isAuthenticated}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/loginopt">
            <MainLogin />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/addmovie">
            <AddMovie />
          </Route>
          <Route exact path="/dashboard/updateMovie/:id">
            <EditMovie />
          </Route>
          <Route exact path="/adminLogin">
            <AdminLogin />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/movie/:id">
            <Movie alerts={showAlert} isAuthenticated={isAuthenticated}/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
