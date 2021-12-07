import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_REQUEST,
    LOAD_USER_REQUEST,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOG_OUT_FAIL,
    LOG_OUT_SUCCESS
} from "../constants/UserConstant";

export const userLogin = (email, password) => async(dispatch) =>{
    try {

        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const data = await axios.post("/api/user/login", {email, password},
        config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error
        })
    }
}


export const userRegister = (name, email, password) => async(dispatch) =>{
    try {

        dispatch({
            type: USER_REGISTER_REQUEST
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const data = await axios.post("/api/user/register", { name, email, password },
        config);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.responce
        })
    }
}

export const adminLogin = (email, password) => async(dispatch) =>{
    try {

        dispatch({
            type: ADMIN_LOGIN_REQUEST
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const data = await axios.post("/api/user/adminLogin", { email, password },
        config);

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: error.responce
        })
    }
}

// loading user
export const loadUser = () => async(dispatch) => {
    try {
  
      dispatch({
        type: LOAD_USER_REQUEST,
      });

  
      const data = await axios.get("/api/user/me");
  
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: error,
      });
    }
  }
  
  // log out 
  export const logout = () => async (dispatch) => {
    try {
  
      await axios.get("/api/user/logout");
  
      dispatch({
        type: LOG_OUT_SUCCESS,
      });
      
    } catch (error) {
      dispatch({
        type: LOG_OUT_FAIL,
        payload: error,
      });
    }
  }

