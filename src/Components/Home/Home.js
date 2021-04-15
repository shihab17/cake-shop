import React from 'react';
import Services from '../Services/Services';
import CakeSection from './CakeSection/CakeSection';
import Header from './Header/Header';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <CakeSection></CakeSection>
            <Services></Services>
        </div>
    );
};

export default Home;