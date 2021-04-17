import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'
const Service = (props) => {
    const {id, image, name, price, description } = props;
    const handleService = id => {
        console.log('clicked',id)
        // const history = useHistory();
        // history.push(`/checkout/${id}`)
    }
    return (
        <div className="col-md-4 d-flex justify-content-center p-5 ">
            <div className="card text-center bg-light service shadow ">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="cake-name">{name}</h4>
                    <p className="card-text">{description}</p>
                    <div className="row">
                        <div className="col-6">
                            <h2 className="price">$ {price}</h2>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-lg button" onClick={() => handleService(id)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;