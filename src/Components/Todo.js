import React from 'react'
import Login from './Login';
import Welcome from './Welcome';
import Error from './Error';
import ListTodo from './ListTodo';
import Header from './Header';
import Footer from './Footer';
import Logout from './Logout';
import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

export default function Todo() {

    //const [loginSuccess, setLoginSuccess] = useState(true);
    return (
        <div>
            <Router>
            <Header></Header>
                <Switch>
                    <Route path="/" exact><Login></Login></Route>
                    <Route path="/login"><Login></Login></Route>
                    <Route path="/welcome/:name"><Welcome></Welcome></Route>
                    <Route path="/todolist"><ListTodo></ListTodo></Route>
                    <Route path="/logout"><Logout></Logout></Route>
                    <Route><Error></Error></Route>
                </Switch> 
                <Footer></Footer>
            </Router>
        </div>
    )
}
