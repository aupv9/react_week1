import * as types from '../types';
import axios from 'axios';

export const login = (email,pass) => {
	return dispatch =>{
		const body={
			email:email,
			password:pass
		}
		axios.post('https://terralogic-training.web.app/api/login',body)
		.then(data=>{	
			console.log("runable")	
			console.log(data)	
			dispatch({
				type: types.LOGIN_SUCCESS,
					data: true
				})
			})
		.catch(e=>{
			console.log(e);
			dispatch({
				type: types.LOGIN_FAIL,
				data: false
			})
			})
	} 
}

export const singup = (email,pass) => {
	return dispatch =>{
		const body={
			email:email,
			password:pass
		}
		axios.post('https://terralogic-training.web.app/api/sign_up',body)
		.then(data=>{	
			console.log(data)	
			dispatch({
				type: types.SIGNUP_SUCCESS,
					data: true
				})
			})
		.catch(e=>{
			console.log(e);
			dispatch({
				type: types.SIGNUP_FAIL,
				data: false
			})
			})
	} 
}

export const update = (info) => {
	return dispatch =>{
		axios.post(' https://terralogic-training.web.app/api/set_profile',info)
		.then(data=>{	
			console.log(data)	
			dispatch({
				type: types.UPDATE_SUCCESS,
					data: true
				})
			})
		.catch(e=>{
			console.log(e);
			dispatch({
				type: types.UPDATE_FAIL,
				data: false
			})
			})
	} 
}