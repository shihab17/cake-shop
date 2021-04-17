import React from 'react';
import CakeItem from './CakeItem/CakeItem';
import './CakeSection.css';
const CakeSection = () => {
    const cakeItem = [
        {
            id:1,
            image: 'https://cdn.shopify.com/s/files/1/1284/6493/files/icon_img1_56x57.png?v=1530960483',
            name: 'Cup Cakes',
            description: 'Distribution,rural development, assitance integrity approch empowerment vaccies pride.thinkers who make change happen'
        },
        {
            id:2,
            image: 'https://cdn.shopify.com/s/files/1/1284/6493/files/icon_img2_56x57.png?v=1530960493',
            name: 'Wedding Cakes',
            description: 'Distribution,rural development, assitance integrity approch empowerment vaccies pride.thinkers who make change happen'
        },
        {
            id:3,
            image: 'https://cdn.shopify.com/s/files/1/1284/6493/files/icon_img3_56x57.png?v=1530960502',
            name: 'Cookies Cake',
            description: 'Distribution,rural development, assitance integrity approch empowerment vaccies pride.thinkers who make change happen'
        }
    ]
    return (
        <section  className="cake-item m-auto mt-5">
            <div className="row p-5">
                {/* {
                    CakeItem.map(cakeItem => <CakeItem image={cakeItem.image} name={cakeItem.name} description={cakeItem.description}></CakeItem>)
                } */}
                {
                    cakeItem.map(cakeItem => <CakeItem image={cakeItem.image} name={cakeItem.name} description={cakeItem.description} key={cakeItem.id}></CakeItem> )
                }
            </div>
        </section>
    );
};

export default CakeSection;