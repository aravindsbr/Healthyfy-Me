import React, { Component } from 'react';
import './css/style.css'
import './css/font-awesome.css'
import Logo from '../chatbot/heart.png'
import { Link } from 'react-router-dom';


class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        };
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
        // this.Validitation = this.Validitation(this)
    }
    setUsername(event) {
        this.setState({
            username: event.target.value
        });
        console.log(this.state.username)
    }

    setPassword(event) {
        this.setState({
            password: event.target.value
        });
        console.log(this.state.password)
    }

    // Validitation(){
    //         return(
    //             <Router>
    //             <div>
    //                     <Route path="/ChatBot" render={
    //                     () => {
    //                         return(
    //                             <div><CustomChatbot /></div>
    //                         )
    //                     }
    //                 }
    //                 />
    //             </div>
    //             </Router>
    //         )
    // }

    render() {
        return (
            <div>
                <h1>Healthy Me <img src={Logo} width="65px" height="65px" alt="heart-logo"></img></h1>
                <div className="main-w3layouts-form">
                    <h2>Login to your account</h2>
                    <form action="/">
                        <div className="fields-w3-agileits">
                            <span className="fa fa-user" aria-hidden="true"></span>
                            <input type="text" name="Username" required="" placeholder="Username" value={this.state.username} onChange={this.setUsername}/>
                        </div>
                        <div className="fields-w3-agileits">
                            <span className="fa fa-key" aria-hidden="true"></span>
                            <input type="password" name="Password" required="" placeholder="Password" value={this.state.password} onChange={this.setPassword}/>
                        </div>
                        <div>
                            <input type="submit" value="Login" />
                        </div>
                        <div className="register">
                                <ul>
                                    <li> <Link to="/signup">Not Yet Registered?</Link></li>
                                </ul>
                                <div className="clear"> </div>
                        </div>
                        
                    </form>
                    {/* <form action="/">
                        <input type="submit" value="Login" />
                    </form> */}
                </div>
            </div>
        );
    }
}

export default Login;