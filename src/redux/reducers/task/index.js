import * as types from '../../types';

import loginService from '../../services';

var initState={success:false}

var taskReducer=(state=initState,action)=>{
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.CLICK:
             console.log(action.mess)
            return state;
        case types.LOGIN:
            if(loginService(action.payload.email,action.payload.password) !==null)
            {
                 
                let user={
                    email:action.payload.email,
                    password:action.payload.password
                }
               
                return Object.assign({},state,{
                    user:user,
                    success:true
                });
            }
            else{
                return state;
            }
            
        default:
            return state;
    }
};

export default taskReducer;