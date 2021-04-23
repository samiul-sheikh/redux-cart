import React from 'react';

const Product = (props) => {

    const { addToCart, product } = props;
    // const { name, id } = props.product;

    return (
        <div style={{ border: '1px solid tomato', marginBottom: '10px' }}>
            <h5>{product.name}</h5>
            <button onClick={() => addToCart(product.id, product.name)} >add to cart</button>
        </div>
    );
};

export default Product;