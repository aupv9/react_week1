import * as types from '../../types';


var initState={success:false}

var taskReducer=(state=initState,action)=>{
    switch (action.type) {
        case types.RECV_DATA:
            console.log(action.data)
            return {
                ...state,
                success: action.data
            }
        default:
            return state;
    }
};

export default taskReducer;