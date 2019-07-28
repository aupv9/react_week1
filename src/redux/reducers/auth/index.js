import * as types from '../../types';

var initState={loginSuccess:false,signupSuccess:false}

var taskReducer=(state=initState,action)=>{
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            console.log(action.data)
            return {
                ...state,
                loginSuccess: action.data
            }
        case types.LOGIN_FAIL: 
            return  {
                ...state,
                loginSuccess: action.data
            }
        case types.SIGNUP_SUCCESS: 
            return  {
                ...state,
                signupSuccess: action.data
            }
        case types.SIGNUP_FAIL: 
            return  {
                ...state,
                signupSuccess: action.data
            }
        default:
            return state;
    }
};

export default taskReducer;