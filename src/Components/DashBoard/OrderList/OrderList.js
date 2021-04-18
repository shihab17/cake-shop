import React, { useEffect, useState } from 'react';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import Sidebar from '../Sidebar/Sidebar';
import OrderCart from './OrderCart/OrderCart';

const OrderList = () => {
    const [bookingList, setBookingList] = useState([])
    useEffect(()=> {
        fetch(`https://nameless-atoll-05922.herokuapp.com/booking`)
        .then(res => res.json())
        .then(data => setBookingList(data))
    },[])
    console.log(bookingList)
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0 }}>
                <DashBoardHeader brandName='Order List'></DashBoardHeader>
                    {
                        bookingList.map(booking => <OrderCart key={booking._id} orderData={booking}></OrderCart>)
                    }
            </div>
        </section>
    );
};

export default OrderList;