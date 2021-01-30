import React from 'react'
import Login from './Login';
import Welcome from './Welcome';
import Error from './Error';
import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

export default function Todo() {

    //const [loginSuccess, setLoginSuccess] = useState(true);
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact><Login></Login></Route>
                    <Route path="/login"><Login></Login></Route>
                    <Route path="/welcome/:name"><Welcome></Welcome></Route>
                    <Route><Error></Error></Route>
                </Switch> 
            </Router>
        </div>
    )
}
