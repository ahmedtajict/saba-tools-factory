import React from 'react';
import tools from '../../../assets/tools.png'
import customer from '../../../assets/customer.png'


const Summary = () => {
    return (
        <div className=''>
            <div className="stats shadow grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 ">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar">
                            <div className="w-16 rounded-full brightness-50">
                                <img src={tools} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title">we Have</div>
                    <div className="stat-value text-primary">15+</div>
                    <div className="stat-desc">Products</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value text-secondary">1.1K+</div>

                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={customer} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title">we served</div>
                    <div className="stat-value">1.2k+</div>
                    <div className="stat-desc">Happy Customers</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Annual revenue</div>
                    <div className="stat-value text-secondary">120M+</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>



            </div >

        </div >
    );
};

export default Summary;