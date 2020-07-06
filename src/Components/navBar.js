import React from 'react';
import Hamburger from "./common/hamburger";
import "../sass/navBar.scss"
import moment from "moment";

const NavBar = () => {

    let dateCreate = moment().format("DD-MM-YYYY hh:mm:ss")

    return (
        <div className="navContainer">
            <div className="navBar">
                <div className="rightSide">
                    <Hamburger/>
                    <h3>Service list</h3>
                    <button className="navButton">Translate website</button>
                </div>
                <h2>TEST DATABASE</h2>
                <div className="navList">
                    <h4 data-toggle="tooltip" data-placement="top"
                        title="Tooltip information WIKI">WIKI</h4>
                    <i className="far fa-heart" data-toggle="tooltip"
                       title="Tooltip information heart"/>
                    <i className="fas fa-user-clock" data-toggle="tooltip"
                       title="Tooltip information clock"/>
                    <h4 data-toggle="tooltip"
                        title="Tooltip information ADMIN ">ADMIN</h4>
                    {dateCreate}
                    <h4 data-toggle="tooltip" data-placement="top"
                        title="Tooltip information LANGUAGE ">PL</h4>
                    <i className="fas fa-chevron-down" data-toggle="tooltip"
                       title="Tooltip information SORT"/>
                    <i className="fas fa-power-off" data-toggle="tooltip"
                       title="Tooltip information POWER"/>

                </div>
            </div>
        </div>
    );
};

export default NavBar;