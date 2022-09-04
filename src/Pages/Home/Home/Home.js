import React, { useEffect, useState } from 'react';
import Product from '../../Tools/Product';
import Banner from '../Banner/Banner';
import Summary from './Summary';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Banner></Banner>

            <Summary></Summary>


            <div className='bg-gray-100'>
                <h1 className='text-5xl text-center py-10'>Popular Product</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 ml-10'>
                    {
                        products.slice(0, 6).map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;