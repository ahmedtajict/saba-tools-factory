import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='bg-gray-100'>
            <h1 className='text-5xl text-center py-10'>FEATURED PRODUCTS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 ml-10'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;