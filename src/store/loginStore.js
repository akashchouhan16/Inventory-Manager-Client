import { attempLogin } from "@/service/LoginService";

export default {
    state: {
        user: {}
    },
    getters: {
        getUserDetail(state){
            return state.user;
        }
    },
    mutations: {
        setUserDetail(state, newUser){
            state.user = newUser || {}
        },
        setUserDetailToLocal(state, newUser){
            state.user = newUser || {}
            localStorage.setItem('user', newUser);
        }
    },
    actions:{
        ATTEMPT_LOGIN(context, {success, error, user}){
            // console.log(state + " | " + user);
            attempLogin({
                success: (response)=>{
                    console.info('ATTEMP_LOGIN Action success.');
                    // console.log(response);
                    success(response);
                },
                error: (err)=>{
                    console.warn('Something went wrong while loggin in' + err);
                    error(err);
                },
                user
            })
        }
    } 
}
