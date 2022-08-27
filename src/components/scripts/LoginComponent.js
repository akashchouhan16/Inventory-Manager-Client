export default{
    name: 'LoginComponent',
    data(){
        return {
            user : {
                emailId: '',
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
            this.$store.dispatch('ATTEMPT_LOGIN', {
                success: (response)=>{
                    this.$router.push({path: '/admindashboard'});
                    console.log(response);
                },
                error: (err)=>{
                    console.warn(err);
                    this.errorFlag.usernameErrorFlag = this.errorFlag.passwordErrorFlag = true;
                },
                user: this.user
            });
            
        },
        resetCredentials(){
            this.user.emailId = "";
            this.user.password = "";
        }
    }
}


/*
OLD validateCredentials: 
            // if(this.user.emailId && this.user.username === "admin" && this.user.password === "admin"){
            //     this.loginMessage = "Logged in as " + this.user.username
            //     this.isloggedIn = true;

            //     setTimeout(()=>{
            //         this.isloggedIn = false; //revert back after 1.5second.
            //     }, 1500);
            //     this.errorFlag.usernameErrorFlag = false;
            //     this.errorFlag.passwordErrorFlag = false;
            //     this.user.username = this.user.password = ""; //clear form field
            //     this.$router.push({path: '/admindashboard'});
                
            // }else if(this.user.username !== "admin" && this.user.password !== "admin"){
            //     this.isloggedIn = false;
            //     this.errorFlag.usernameErrorFlag = this.errorFlag.passwordErrorFlag = true;
            // }else if(this.user.password !== "admin"){
            //     this.isloggedIn = false;
            //     this.errorFlag.passwordErrorFlag = true;
            // }else{
            //     this.isloggedIn = false;
            //     this.errorFlag.usernameErrorFlag = true;
            // }

*/ 