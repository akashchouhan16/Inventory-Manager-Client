import axios from "axios"

export const LOGIN_API = 'http://10.30.1.35:8005/login'
export const attempLogin = ({success, error, user})=>{
   //  console.log(user.emailId + " | " + user.password);
    axios.post(LOGIN_API, user)
         .then(response =>{
            if(response.data.role === undefined || response.data.role === null)
                throw new Error('Invalid Login credential, No role assigned');
            console.log('Login Success!')
            console.log(response);  
            localStorage.setItem('role', response.data.role);
            localStorage.setItem('emailId', user.emailId);
            localStorage.setItem('userId', response.data.userId);
            success && success(response);
         })
         .catch(err =>{
            error && error(err);
         })
}