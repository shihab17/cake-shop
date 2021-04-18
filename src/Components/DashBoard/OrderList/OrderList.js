import React from 'react';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0 }}>
                <DashBoardHeader brandName='Order List'></DashBoardHeader>
                
            </div>
        </section>
    );
};

export default OrderList;