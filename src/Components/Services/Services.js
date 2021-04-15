import React from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const serViceFakeData = [
        {
            image: 'https://cdn.shopify.com/s/files/1/1284/6493/products/7_grande.jpg?v=1471493600',
            name: `Valentine's Day Cup Cake`,
            price: 200,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, accusantium.'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/1284/6493/products/11_grande.jpg?v=1471432940',
            name: `Jewelled Fruit Cake`,
            price: 850,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, accusantium.'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/1284/6493/products/12_grande.jpg?v=1471432900',
            name: `Heartfelt Gift Basket`,
            price: 550,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, accusantium.'
        }
    ]
    return (
        <section className="services">
            <div style={{ width:'90%' }} className='m-auto'>
                <h2 className="text-center m-2 service-header">Services</h2>
                <div className="d-flex justify-content-center">
                    <img src="https://cdn.shopify.com/s/files/1/1284/6493/files/show_divider_2_69x61.png?v=1531124089" alt="" />
                </div>
                <div className="row">
                    {
                        serViceFakeData.map(service => <Service image={service.image} name={service.name} price={service.price} description={service.description}></Service>)
                    }
                </div>
                <div className="d-flex justify-content-center">
                    <button style={{ background: '#ff7380', color: 'white' }} className="btn btn-lg ">More Services</button>
                </div>
            </div>
        </section>
    );
};

export default Services;