import React, { useEffect, useState } from 'react';
import Testimonial from '../Home/Testimonial/Testimonial';
import './Testimonials.css'
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('https://nameless-atoll-05922.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    },[])
    console.log("testimonial",testimonials)
    return (
        <section className='m-auto'>
            <h2 className="text-center m-2 service-header p-5">Testimonial</h2>
            <div className="row p-5">
            {
                testimonials.map(testimonial => <Testimonial  key={testimonial._id} testimonial={testimonial} ></Testimonial> )
            }
            </div>


        </section>
    );
};

export default Testimonials;