import React from 'react';

const DashBoardHeader = ({brandName}) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light text-muted'>
            <div className="container-fluid">
                <h3>{brandName}</h3>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item ms-5">Name</li>
                </ul>
            </div>
        </nav>
    );
};

export default DashBoardHeader;