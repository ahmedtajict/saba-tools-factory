import React from 'react';
import Banner1 from '../../../assets/Banner/sample-1.jpg'
import Banner2 from '../../../assets/Banner/sample-2.jpg'
import Banner3 from '../../../assets/Banner/sample-3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={Banner1} alt='' className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={Banner2} alt='' className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={Banner3} alt='' className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;