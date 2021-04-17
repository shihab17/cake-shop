import React from 'react';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;