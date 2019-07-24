import * as types from '../../types'

import loginService from '../../services'


var taskReducer=(state={success:false},action)=>{
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.CLICK:
             console.log(action.mess)
            return state;
        case types.LOGIN:
            loginService(action.payload.email,action.payload.password).then((res)=>{
                state.success=true;
                return state;
            })
            .catch(err => state.success=false);
            
        default:
            return state;
    }
};

export default taskReducer;