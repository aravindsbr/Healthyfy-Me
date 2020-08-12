import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Register from "./components/Register/registration"
import CustomChatbot from "./components/chatbot/CustomChatbot"
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Summary from "./components/Summary/Summary";

const routing = (
<Router>
    <div>
        <Route  path="/login" component={Login}/>
        <Route path="/signup" component={Register}/>
        <Route exact path="/" component={CustomChatbot}/>
        <Route path="/summary" component={Summary}/>
    </div>
</Router>
)

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();