import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p> Items: {cart.length}</p>
        </div>
    );
};

export default Cart;