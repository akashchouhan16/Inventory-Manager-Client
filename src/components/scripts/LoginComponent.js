export default{
    name: 'LoginComponent',
    data(){
        return {
            user : {
                username: '',
                password: '',
            },
            isloggedIn: false,
            errorFlag: {
                passwordErrorFlag: false,
                usernameErrorFlag: false, 
            },
            loginButtonClass: 'login-button',
            resetButtonClass: 'reset-button',
        }
    },
    methods: {
        validateCredentials(){
  

            if(this.user.username && this.user.username === "admin" && this.user.password === "admin"){
                this.loginMessage = "Logged in as " + this.user.username
                this.isloggedIn = true;

                setTimeout(()=>{
                    this.isloggedIn = false; //revert back after 1.5second.
                }, 1500);
                this.errorFlag.usernameErrorFlag = false;
                this.errorFlag.passwordErrorFlag = false;
                this.user.username = this.user.password = ""; //clear form field
                this.$router.push({path: '/admindashboard'});
                
            }else if(this.user.username !== "admin" && this.user.password !== "admin"){
                this.isloggedIn = false;
                this.errorFlag.usernameErrorFlag = this.errorFlag.passwordErrorFlag = true;
            }else if(this.user.password !== "admin"){
                this.isloggedIn = false;
                this.errorFlag.passwordErrorFlag = true;
            }else{
                this.isloggedIn = false;
                this.errorFlag.usernameErrorFlag = true;
            }

            
        },
        resetCredentials(){
            this.user.username = "";
            this.user.password = "";
        }
    }
}