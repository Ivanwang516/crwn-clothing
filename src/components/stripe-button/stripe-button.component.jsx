import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KceDxKfoMModWhMY5vf5GHmeeBCGZOXp5wjaBMCQlz6SZcOTI10pM5KBdEeQVjm0Ev7lx7Dz5255Px4xLM0h3pU00DYqq8Bxn'

    const onToken = token => {
        console.log(token);

        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton;