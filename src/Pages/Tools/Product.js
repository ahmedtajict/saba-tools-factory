import React from 'react';

const Product = ({ product }) => {
    const { name, minimurOrderQ, availableQ, price, description, img } = product;

    return (

        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div className="card-body items-center text-primary text-justify">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p>{description}</p>

                <div className="card-actions">
                    <h3 className='text-xl'>Stock: {availableQ}</h3>
                    <h3 className='text-xl ml-3'>Minimum Order: {minimurOrderQ}</h3>

                </div>



                <div className="card-actions">
                    <h3 className='text-3xl font-bold'>{price}</h3>
                    <button className='btn btn-secondary hover:bg-primary hover:text-secondary'>Place Order</button>

                </div>


            </div>
        </div>

    );
};

export default Product;