import * as types from '../types';
import axios from 'axios';

function receiveData(json) {
	return{
		type: types.RECV_DATA,
		data: json
	}
};
function receiveError(json) {
	return {
		type: types.RECV_ERROR,
		data: json
	}
};
export const login = (email,pass) => {
	return dispatch =>{
		const body={
			email:email,
			password:pass
		}
		const res=axios.post('https://terralogic-training.web.app/api/login',body).then(data=>{	
			console.log("runable")	
				dispatch({
					type: types.RECV_DATA,
					data: true
				})
			}).catch(e=>{
				console.log(e);
				dispatch({
					type: types.RECV_DATA,
					data: false
				})
			})
		
		
	} 
}