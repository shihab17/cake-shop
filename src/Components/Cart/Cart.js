import React, { useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
const Cart = (props) => {
    console.log(props)
    const { _id, name, price, quantity } = props.cart;
    const total = quantity*price;
    const handleDelete = id => {
        fetch(`http://localhost:5000/deleteCheckout/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    // document.getElementById('quantity').value=quantity;
    console.log(quantity, _id)
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button className='bg-success text-white rounded' onClick={() => props.handleAddQuantity(_id,quantity)}><FontAwesomeIcon icon={faPlusSquare} /></button>
                <input className=" input-group-field" type="number" defaultValue={quantity} name="quantity" id="quantity" />
                <button className='bg-danger text-white rounded' onClick={() => props.handleMinusQuantity(_id,quantity)}><FontAwesomeIcon icon={faMinusSquare} /></button>
            </td>
            <td>{total}</td>
            <td> <button className='bg-light text-danger rounded' onClick={() => handleDelete(_id)} ><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button> </td>
        </tr>
    );
};

export default Cart;