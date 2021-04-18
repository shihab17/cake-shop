import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { LoggedInContext } from '../../App';
import './Service.css'
const Service = (props) => {
    // console.log('props', props.serviceData.imageUrl)
    const { title, price, description, imageUrl } = props.serviceData.data;
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext)
    const sessionLoggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
    const history = useHistory();
    const handleService = id => {
        console.log('clicked', id)

        const checkoutData = {
            serviceId: id,
            image: props.serviceData.imageUrl,
            title: title,
            price: price,
            description: description,
            quantity: 1,
            date: new Date(),
            email: loggedInUser.email || sessionLoggedInUser.email
        }
        fetch('https://nameless-atoll-05922.herokuapp.com/addCheckout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkoutData)
        })
            .then(res => {
                console.log(res)
            })

        history.push('/checkout')
    }
    return (
        <div className="col-md-4 d-flex justify-content-center p-5 ">
            <div className="card text-center bg-light service shadow ">
                <img src={props.serviceData.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="cake-name">{title}</h4>
                    <p className="card-text">{description}</p>
                    <div className="row">
                        <div className="col-6">
                            <h2 className="price">$ {price}</h2>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-lg button" onClick={() => handleService(props._id)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;