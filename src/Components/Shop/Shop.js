import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = () => {

    const products = [
        { name: 'Lenovo Laptop', id: 1 },
        { name: 'Dell Laptop', id: 2 },
        { name: 'HP Laptop', id: 3 },
        { name: 'Acer Laptop', id: 4 },
        { name: 'Toshiba Laptop', id: 5 }
    ]

    return (
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd => <Product product={pd}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);