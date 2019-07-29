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
			dispatch({
				type: types.LOGIN_SUCCESS,
					isLoginSuccess: true,
					data:data
				})
		})
		.catch(e=>{
			console.log(e);
			dispatch({
				type: types.LOGIN_FAIL,
				isLoginSuccess: false,
				data:e
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

export const getProfile = (token) => {
	return dispatch =>{
		const headers={
			'x-user-token':token
		}
		axios.post('https://terralogic-training.web.app/api/get_profile',{},{headers:headers})
		.then(data=>{	
			console.log("succes get profile")	
			dispatch({
				type: types.GET_PROFILE_SUCCESS,
					isGetSuccess:true,
					data: data.data
				})
			})
		.catch(e=>{
			console.log(e);
			dispatch({
				type: types.GET_PROFILE_FAIL,
				isGetSuccess:false,
				data:[]
			})
		})
	} 
}


export const update = (info,token) => {
	return dispatch =>{
		const headers={
			'x-user-token':token
		}
		axios.post(' https://terralogic-training.web.app/api/set_profile',info,{headers:headers})
		.then(data=>{	
			dispatch({
				type: types.SET_PROFILE_SUCCESS,
				isSetSuccess:true,
				data: data
				})
			})
		.catch(e=>{
			console.log(e);
			dispatch({
				type: types.SET_PROFILE_FAIL,
				isSetSuccess:false,
				data: {}
			})
			})
	} 
}