import * as types from '../../types';

var initState={isLoginSuccess:false,isSignupSuccess:false}

var taskReducer=(state=initState,action)=>{
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess,
                data:action.data
            }
        case types.LOGIN_FAIL: 
            return  {
                ...state,
                isLoginSuccess: action.isLoginSuccess,
                data:action.data
            }
        case types.SIGNUP_SUCCESS: 
            return  {
                ...state,
                isSignupSuccess: action.data
            }
        case types.SIGNUP_FAIL: 
            return  {
                ...state,
                isSignupSuccess: action.data
            }
        case types.GET_PROFILE_SUCCESS: 
            return  {
                ...state,
                isGetProfile:action.isGetSuccess,
                data: action.data
            }
        case types.GET_PROFILE_FAIL: 
            return  {
                ...state,
                isGetProfile:action.isGetSuccess,
                data: action.data
            }
        case types.SET_PROFILE_SUCCESS: 
            return  {
                ...state,
                isSetSuccess:action.isSetSuccess,
                data: action.data
            }
        case types.SET_PROFILE_FAIL: 
            return  {
                ...state,
                isSetSuccess:action.isSetSuccess,
                data: action.data
            }        
        default:
            return state;
    }
};

export default taskReducer;