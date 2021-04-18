import React, { useContext, useEffect, useState } from 'react';
import UserDashBoardHeader from '../UserDashBoardHader/UserDashBoardHeader';
import UserSidebar from '../UserSidebar/UserSidebar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm/SimpleCardForm';
import { LoggedInContext } from '../../../App';

const stripePromise = loadStripe('pk_test_51IhW5BDrRnd8QU9xyBwc2rzFS9vSRuoBuuccxOrgGwGAeULtABLJKJYY1ngBTzhnPsLls5SNwyKt3KyalCEEzpDp00BIJIWsIz');
const BookOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const sessionLoggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const [info, setInfo] = useState(null)
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch(`https://nameless-atoll-05922.herokuapp.com/order/${loggedInUser.email || sessionLoggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    console.log(order.length)

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handlePayment = paymentId => {
        console.log("payment", paymentId)
        const detailsData = {
            orderData: order,
            shippingData: info,
            paymentId,
            email: loggedInUser.email || sessionLoggedInUser.email
        }
        console.log(detailsData)
        fetch(`https://nameless-atoll-05922.herokuapp.com/addBooking`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(detailsData)
        })
            .then(res => {
                console.log(res)
                fetch(`https://nameless-atoll-05922.herokuapp.com/deleteOrder/${loggedInUser.email || sessionLoggedInUser.email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log('deleted successfully')
                        document.getElementById('name').value = '';
                        document.getElementById('email').value = '';
                        document.getElementById('address').value = '';
                        // history.push('/addBooking')
                    })
            })
    }
    console.log(info)
    return (
        <section className="container-fluid row">
            <UserSidebar></UserSidebar>
            <div className="col-md-10 p-4 ps-5 bg-light" style={{ position: "absolute", right: 0 }}>
                <UserDashBoardHeader brandName='Booking'></UserDashBoardHeader>
                <br />
                <p>Total Order: {order.length} </p>
                <div className="row">
                    <h6>Shipment Information</h6>
                    <form className="form-group" action="">
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input className="form-control" type="text" name="name" id="name" onBlur={handleBlur} placeholder="Enter Your name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input className="form-control" type="email" name="email" id="email" onBlur={handleBlur} placeholder="Enter email Address" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="address" className="form-label">Your Address</label>
                                <input className="form-control" type="address" name="address" id="address" onBlur={handleBlur} placeholder="Enter Your Address" />
                            </div>
                        </div>
                    </form>
                </div>
                <br />
                <div className='row'>
                    <h6>Pay With</h6>
                    <br />
                    <div className="col-md-4">
                        <Elements stripe={stripePromise}>
                            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
                        </Elements>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookOrder;