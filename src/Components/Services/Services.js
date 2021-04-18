import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(()=> {
        fetch(`https://nameless-atoll-05922.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[]);
    return (
        <section className="services">
            <div style={{ width: '90%' }} className='m-auto'>
                <h2 className="text-center m-2 service-header">Services</h2>
                <div className="d-flex justify-content-center">
                    <img src="https://cdn.shopify.com/s/files/1/1284/6493/files/show_divider_2_69x61.png?v=1531124089" alt="" />
                </div>
                <div className="row">
                    {
                        serviceData.map(service => <Service key={service._id} serviceData={service}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;