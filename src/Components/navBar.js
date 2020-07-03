import React from 'react';
import Hamburger from "./common/hamburger";
import "../sass/navBar.scss"

const NavBar = () => {
    return (
        <div className="navContainer">
            <div className="navBar">
                <div className="rightSide">
                    <Hamburger/>
                    <h2>Service List</h2>
                    <button className="navButton">Translate website</button>
                </div>
                <h1>DATA TEST</h1>
                <div className="navList">
                    sdcsdc
                </div>
            </div>


        </div>
    );
};

export default NavBar;