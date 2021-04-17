import React from 'react';

const Testimonial = ({ name, comment,rating }) => {
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{rating}</h6>
                    <p className="card-text">{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;