import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
           <div className="container">
                <h1>Examples using React, Redux and React Router in ES6</h1>
                <ul className="nav flex-column">
                    <li className="nav-item"><Link className="nav-link" to="/courses" activeClassName="active">Courses</Link></li>
                    <li className="nav-item">  <Link className="nav-link" to="/counter" activeClassName="active">Counter</Link></li>
                    <li className="nav-item"> <Link className="nav-link" to="/github" activeClassName="active">Github</Link></li>
                    <li className="nav-item"> <Link className="nav-link" to="/findmovie" activeClassName="active">Find Movie</Link></li>
                </ul>
           </div>
        );
    }
}

export default HomePage;