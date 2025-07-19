import React from 'react';

function Hero() {
    return (
        <div className="cantainer">
            <div className="row border-bottom text-muted text-center mt-5  p-5">
                <h2>Charges</h2>
                <h6 className='mt-2'>List of all charges and taxes</h6>
            </div>
            <div className="row mt-5 p-5 ">
                <div className="col-4 p-5">
                    <img src="Assets/pricingEquity.svg" alt="" />
                    <h2>Free equity delivery</h2>
                    <p className='mt-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                    <img src="Assets/intradayTrades.svg" alt="" />
                    <h2>Intraday and F&O trades</h2>
                    <p className='mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.

                    </p>

                </div>
                <div className="col-4">
                    <img src="Assets/pricingEquity.svg" alt="" />
                    <h2 className='text-center'>Free direct MF</h2>
                    <p className='mt-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>
            </div>
        </div>
    );
}

export default Hero;