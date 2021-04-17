import React from 'react';
import './DashBoard.css'
import Sidebar from './Sidebar/Sidebar';

const DashBoard = () => {

    return (
        <section>
            <div className="row">

            </div>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-6 col-12">
                    
                </div>
            </div>

        </section>
    );
};

export default DashBoard;