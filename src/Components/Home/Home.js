import React from 'react';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Testimonials from '../Testimonials/Testimonials';
import CakeSection from './CakeSection/CakeSection';
import Header from './Header/Header';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <CakeSection></CakeSection>
            <Services></Services>
            <Testimonials></Testimonials>
            <h5 className="text-center">Contact</h5>
            <p className="text-center text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;