import React from 'react';
import "./tableNav.scss"

const TableNav = () => {
    return (
        <div className="filterTable">
            <button>DODAJ FILTRY</button><span><i className="fas  fa-sort-down"/></span>
            <button>CZYŚĆ FILTRY</button>
            <h2>5385</h2>
            <p>liczba rekordów</p>
            <button>WIERSZY</button>
        </div>
    );
};

export default TableNav;