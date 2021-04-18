import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faPlus, faShoppingCart, faShoppingBasket, faFileAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
const UserSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li >
                    <Link to="/dashboard" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addBooking" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Booking</span>
                    </Link>
                </li>
                <li>
                    <Link to="/booking" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default UserSidebar;