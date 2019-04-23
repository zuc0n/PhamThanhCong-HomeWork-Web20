import React, {Component} from 'react';

import SearchField from "./SearchField"
class NavBar extends Component {
    render(){
        return (
            <div className="navbar">
                <div className="container">
                    Das ist Navbar
                    <SearchField />
                </div>
            </div>
        );
    }
}

export default NavBar;