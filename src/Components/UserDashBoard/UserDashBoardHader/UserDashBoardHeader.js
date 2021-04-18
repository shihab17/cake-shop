import React, { useContext } from 'react';
import { LoggedInContext } from '../../../App';

const UserDashBoardHeader = ({brandName}) => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const sessionLoggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-white text-muted'>
            <div className="container-fluid">
                <h3>{brandName}</h3>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item ms-5">{loggedInUser.name || sessionLoggedInUser.name}</li>
                </ul>
            </div>
        </nav>
    );
};

export default UserDashBoardHeader;