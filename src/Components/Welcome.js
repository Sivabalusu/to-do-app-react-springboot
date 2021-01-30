import React from 'react'
import {useParams, Link} from 'react-router-dom'

export default function Welcome() {
    const {name}=useParams();
    return (
        <div>
            <h1>Welcome !</h1>
            <div className="container">
                Welcome to To-Do App {name} you can manage your todos <Link to="/todolist"> here</Link>
            </div>
        </div>
    )
}
