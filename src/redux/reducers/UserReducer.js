import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_REQUEST,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOG_OUT_FAIL,
    LOG_OUT_SUCCESS
} from "../constants/UserConstant";

export const userReducer = (state ={user: {}}, action) =>{
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        case USER_REGISTER_REQUEST:
        case ADMIN_LOGIN_REQUEST:
        case LOAD_USER_REQUEST:
            return{
                loading: true,
                isAuthenticated: false,
            }

        case USER_LOGIN_SUCCESS:
        case USER_REGISTER_SUCCESS:
        case ADMIN_LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                type: action.payload.data.result,
                user: action.payload.data,
            }

        case USER_LOGIN_FAIL:
        case USER_REGISTER_FAIL:
        case ADMIN_LOGIN_FAIL:
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            }

        case LOAD_USER_SUCCESS:
            return {
                isAuthenticated: true,
                loading: false,
                type: action.payload.data.result,
                user: action.payload.data,
            };

        case LOAD_USER_FAIL:
            return{
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

            
        case LOG_OUT_SUCCESS:
            return{
                loading: false,
                isAuthenticated: false,
                user: null,
            };
  
      case LOG_OUT_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
    
        default:
            return state;
    }   
}