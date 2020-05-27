import React from 'react';
import './header.css'

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="topnav" id="myTopnav">
                <a href="index.html" class="active">Home</a>
                <a href="about.html">About</a>
            </div>
        )
    }
}

export default Header;