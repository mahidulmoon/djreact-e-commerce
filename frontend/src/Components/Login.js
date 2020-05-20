import React,{Component} from 'react';
import axios from 'axios';

class Login extends Component{
    state = {
        logindata:{
            username:'',password:''
        },
        token:[]
    }

    inputchange= e =>{
        const cred = this.state.logindata;
        cred[ e.target.name ] = e.target.value;
        this.setState({ logindata: cred });
    }
    onsubmit = e =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/auth/',this.state.logindata).then(response => {
            this.setState({ token: response.data }); 
            localStorage.setItem('token', this.state.token.token);
            alert("Success");
        }).catch( error => alert("Username And Password isnot matched!!!"))
    }

    render(){
        return(
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    
                    <h2 class="active"> Sign In </h2>
                    <h2 class="inactive underlineHover">Sign Up </h2>

                    
                    <form>
                    <input type="text" id="login" class="fadeIn second" name="username" value={this.state.logindata.username} onChange={this.inputchange} placeholder="Username" />
                    <input type="text" id="password" class="fadeIn third" name="password" value={this.state.logindata.password} onChange={this.inputchange} placeholder="password" />
                    <input type="submit" class="fadeIn fourth" onClick={this.onsubmit} value="Log In" />
                    </form>

                    
                    <div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;