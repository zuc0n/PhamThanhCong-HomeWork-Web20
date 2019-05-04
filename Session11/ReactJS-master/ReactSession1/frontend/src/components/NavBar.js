import React, { Component } from 'react';
import SearchField from './SearchField';
// import logo from "../logo/logo.jpn"; 
import ProfilePanel from './ProfilePanel';

class NavBar extends Component {
    render() {
        return (
            <div className = "navBar">
                <div className = "container">
                    <SearchField />
                    {/* <div className = "col-6 text-center">
                        <img src= {logo} /> 
                    </div> */}
                    <ProfilePanel />
                </div>
            </div>
        );
    }
}

export default NavBar;