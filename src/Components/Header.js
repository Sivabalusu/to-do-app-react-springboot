import React from 'react'
import { Link, BrowserRouter as Router} from 'react-router-dom'

function Header() {
    return (
        <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">To-Do App</div>
                   
                        <ul className="navbar-nav">
                            <li><Link to="/welcome/siva" className="nav-link"> Home</Link></li>
                            <li><Link to="/todolist" className="nav-link">Todos</Link></li>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <li><Link to="/login" className="nav-link">Login</Link></li>
                            <li><Link to="/logout" className="nav-link">Logout</Link></li>
                        </ul>
        
                </nav>
            </header>
    )
}

export default Header;
