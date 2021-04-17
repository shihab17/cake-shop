import React from 'react';
import Testimonial from '../Home/Testimonial/Testimonial';
import './Testimonials.css'
const Testimonials = () => {
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
            <div className="row">
            {
                testimonialFakedata.map(testimonial => <Testimonial name={testimonial.name} comment={testimonial.comment} rating={testimonial.rating} key={testimonial.id} ></Testimonial> )
            }
            </div>


        </section>
    );
};

export default Testimonials;