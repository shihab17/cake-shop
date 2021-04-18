import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Testimonial = (props) => {
    console.log(props.testimonial)
    const { name, comment } = props.testimonial.reviewData;
    let ratings = [];
    for (let i = 0; i < props.testimonial.rating; i++) {
        ratings.push(i);

    }
    console.log("rows", ratings)
    return (
        <div className="col-md-4 d-flex justify-content-center p-3">
            <div className="card shadow">
                <div className="card-body p-5">
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-center p-2">
                            <h5 className="card-title">{name}</h5>
                            <h6 className="card-subtitle mb-2 " style={{ color: '#ffd700' }} >{
                                ratings.map(rating => <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>)
                            } </h6>
                        </div>
                        <div className="col-md-8 p-1">
                            <p className="card-text">{comment}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Testimonial;