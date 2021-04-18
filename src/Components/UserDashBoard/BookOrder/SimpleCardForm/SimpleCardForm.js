import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const SimpleCardForm = ({handlePayment}) => {
    const [errorMassage, setErrorMassage] = useState(null)
    const [successMassage, setSuccessMassage] = useState(null)
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrorMassage(error.message);
            setSuccessMassage(null)
        } else {
            setSuccessMassage(paymentMethod.id);
            setErrorMassage(null)
        }
    };
    return (
        <div >
            {
                errorMassage && <p className='text-danger'>{errorMassage}</p>
            }
            {
                successMassage && <p className='text-success'>Your Payment Successfully Done</p>
            }
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br/>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit" disabled={!stripe} onClick={() => handlePayment(successMassage)} >
                        Pay
                </button>
                </div>
            </form>
        </div>
    );
};

export default SimpleCardForm;