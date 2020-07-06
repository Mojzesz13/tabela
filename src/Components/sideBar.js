import React from 'react';
import "./sideBar.scss";

const SideBar = () => {


    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Dashboard</h3>
                </div>
                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                           className="dropdown-toggle">Zadania</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li className="insideList">
                                <a href="#">Page 1</a>
                            </li>
                            <li className="insideList">
                                <a href="#">Page 2</a>
                            </li>
                            <li className="insideList">
                                <a href="#">Page 3</a>
                            </li>
                            <li className="insideList">
                                <a href="#">Page 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Zadania dokumenty</a>
                    </li>
                    <li>
                        <a href="#">Pracownicy</a>
                    </li>
                    <li>
                        <a href="#">Rekrutacje</a>
                    </li>
                    <li>
                        <a href="#">Kandydaci</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                           className="dropdown-toggle">EOD</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li className="insideList">
                                <a href="#">Page 1</a>
                            </li>
                            <li className="insideList">
                                <a href="#">Page 2</a>
                            </li>
                            <li className="insideList">
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Ustawienia</a>
                    </li>
                </ul>
            </nav>

        </div>


    );

};

export default SideBar;