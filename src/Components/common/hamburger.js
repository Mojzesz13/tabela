import React from 'react';
import './hamburger.scss';

const Hamburger = () => {
    return (
        <button type="button" id="sidebarCollapse" className="btn btn-info">
            <i className="fas fa-bars"/>
        </button>
    );
};

export default Hamburger;