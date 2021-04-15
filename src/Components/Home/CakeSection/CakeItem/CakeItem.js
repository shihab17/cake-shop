import React from 'react';
import './CakeItem.css'
const CakeItem = (props) => {
    const {image,name,description} = props;
    return (
        <div className="col-md-4 d-flex justify-content-center p-5">
            <div className="icon-content">
                <img className="p-5" src={image} alt="" />
                <h1 className="p-2">{name}</h1>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default CakeItem;