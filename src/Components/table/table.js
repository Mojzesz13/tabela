import React from 'react';
import "./table.scss"
import TableNav from "./tableNav";
import TableBody from "./tableBody";

const Table = () => {
    return (
        <div className="tableContainer">
                <TableNav/>
                <TableBody/>

        </div>
    );
};

export default Table;