import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item active"><IndexLink className="nav-link" to="/">Home</IndexLink></li>
                <li className="nav-item"><Link className="nav-link" to="/courses" activeClassName="active">Courses</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about" activeClassName="active">About</Link></li>
                <li className="nav-item">  <Link className="nav-link" to="/counter" activeClassName="active">Counter</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/github" activeClassName="active">Github</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/findmovie" activeClassName="active">Find Movie</Link></li>
            </ul>
        </nav>
    );
};

export default Header;