import React from 'react';
import quote from '../../assets/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: "Robin",
            location: "Dhaka",
            img: people1
        },
        {
            _id: 2,
            name: "Mery",
            location: "Barisal",
            img: people2
        },
        {
            _id: 3,
            name: "Sely",
            location: "Sylet",
            img: people3
        },
    ]

    return (
        <section className='my-28 bg-gray-100'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Reviews</h4>
                    <h2 className='text-3xl'>What out Clients say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt='' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;