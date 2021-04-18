import React, { useEffect, useState } from 'react';
import UserDashBoardHeader from '../UserDashBoardHader/UserDashBoardHeader';
import UserSidebar from '../UserSidebar/UserSidebar';

const BookingList = () => {
    const [booking, setBooking] = useState([])
    useEffect(() =>{
        fetch(`https://nameless-atoll-05922.herokuapp.com/booking`)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
    console.log(booking)
    return (
        <section className="container-fluid row">
            <UserSidebar></UserSidebar>
            <div className="col-md-10 p-4 ps-5 bg-light" style={{ position: "absolute", right: 0 }}>
                <UserDashBoardHeader brandName='Booking List'></UserDashBoardHeader>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default BookingList;