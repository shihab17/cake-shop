import React from 'react';
import './Service.css'
const Service = (props) => {
    const { image, name, price, description } = props;
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
                            <button className="btn btn-lg button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;