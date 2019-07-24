import axios from 'axios';


var loginService=(email,password)=>{
    const body={
        email:email,
        password:password
    }
    return axios.post('https://terralogic-training.web.app/api/login',body);

}
export default loginService;


