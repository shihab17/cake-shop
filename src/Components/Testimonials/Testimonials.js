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
    const testimonialFakedata = [
        {
            id:1,
            name: 'Nash Part',
            comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis reprehenderit, hic ut eligendi nobis necessitatibus aut animi. Cum aliquam numquam eos ipsa error repellat, quidem facere sapiente recusandae neque?',
            rating: '5 star'
        },
        {
            id:2,
            name: 'Nash Part',
            comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis reprehenderit, hic ut eligendi nobis necessitatibus aut animi. Cum aliquam numquam eos ipsa error repellat, quidem facere sapiente recusandae neque?',
            rating: '5 star'
        },
        {
            id:3,
            name: 'Nash Part',
            comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis reprehenderit, hic ut eligendi nobis necessitatibus aut animi. Cum aliquam numquam eos ipsa error repellat, quidem facere sapiente recusandae neque?',
            rating: '5 star'
        }
    ]
    return (
        <section>
            <div className="row p-5">
            {
                testimonials.map(testimonial => <Testimonial  key={testimonial._id} testimonial={testimonial} ></Testimonial> )
            }
            </div>


        </section>
    );
};

export default Testimonials;