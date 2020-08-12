import React, { Component } from 'react';
import '../Login/css/style.css'
import '../Login/css/font-awesome.css'
import { Link } from 'react-router-dom';
import Logo from '../chatbot/heart.png'



class Register extends Component{
    render() {
        return (
            <div>
                <h1>Healthy Me <img src={Logo} width="65px" height="65px" alt="heart-logo"></img></h1>
                <div className="main-w3layouts-form">
                    <h2>Sign Up</h2>
                    <form action="/">
                        <div className="fields-w3-agileits">
                            <span className="fa fa-user" aria-hidden="true"></span>
                            <input type="text" name="Username" required="" placeholder="Username" />
                        </div>
                        <div className="fields-w3-agileits">
                            <span className="fa fa-key" aria-hidden="true"></span>
                            <input type="password" name="Password" required="" placeholder="Password" />
                        </div>
                        <div className="fields-w3-agileits">
                            <span className="fa fa-key" aria-hidden="true"></span>
                            <input type="password" name="Confirm Password" required="" placeholder="Confirm Password" />
                        </div><br/>
                        <div>
                            <input type="submit" value="Register"/>
                        </div>
                        <div className="register">
                            <ul>
                                <li> <Link to="/">Login to your account</Link> </li>
                            </ul>
                            <div className="clear"> </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;