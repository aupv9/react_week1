import axios from 'axios';


var loginService=(email,password)=>{
    const body={
        email:email,
        password:password
    }
    var flag=false;
     axios.post('https://terralogic-training.web.app/api/login',body)
     .then(rs => {
        console.log(rs.config.data)
            flag=true
         
     }).catch(err =>{
         flag=false
         console.log(err)
     });
     return flag;
}
export default loginService;


