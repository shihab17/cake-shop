import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { LoggedInContext } from '../../App';
import Cart from '../Cart/Cart';
import Navbar from '../Shared/Navbar/Navbar';

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const sessionLoggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const history = useHistory()
    useEffect(() => {
        fetch(`https://nameless-atoll-05922.herokuapp.com/checkout/${loggedInUser.email || sessionLoggedInUser.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);
    const handleAddQuantity = (id, quantity) => {
        const checkoutUpdateData = {
            quantity: quantity + 1

        }
        handleQuantity(id, checkoutUpdateData)
    }
    const handleMinusQuantity = (id, quantity) => {
        const checkoutUpdateData = {
            quantity: quantity - 1

        }
        handleQuantity(id, checkoutUpdateData)
    }
    const handleQuantity = (id, checkoutUpdateData) => {

        fetch(`https://nameless-atoll-05922.herokuapp.com/updateCheckout/${id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(checkoutUpdateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                }
            })
    }
    const subTotal = cart.reduce((total, product) => total + Number(product.price * product.quantity), 0);
    const handleCheckout = () => {
        const orderData = {
            data: cart,
            total: subTotal,
            status:'',
            email: loggedInUser.email || sessionLoggedInUser.email
        }
        fetch(`https://nameless-atoll-05922.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => {
                console.log("response", res)
                fetch(`https://nameless-atoll-05922.herokuapp.com/deleteCheckout/${loggedInUser.email || sessionLoggedInUser.email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log('deleted successfully')
                        history.push('/addBooking')
                    })
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <section className='row container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(cart => <Cart key={cart._id} cart={cart} handleAddQuantity={handleAddQuantity} handleMinusQuantity={handleMinusQuantity} ></Cart>)
                        }


                    </tbody>

                </table>
                <hr />
                <h5>Sub-Total: ${subTotal} </h5>
                <div className="col-md-4">
                    <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
                </div>
            </section>
        </div>
    );
};

export default Checkout;