import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="topnav" id="myTopnav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default Header;