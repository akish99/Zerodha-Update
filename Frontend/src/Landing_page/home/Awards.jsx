import React from 'react';

function Awards() {
    return ( 
        <div className="cantainer">
            <div className="row">
<div className="col-6 p-5">
<img src="Assets/largestBroker.svg" alt="Largest Broker" />

</div>
<div className="col-6 p-5">
<h1 className='mt-5'>Largest Stock Broker in India</h1>
<p className='mb-5'>2+ Million Zerodha clients contribute to over 15% of all the volumes in India daily by trading and Investing in:</p>
<div className="row">
<div className="col-6">
<ul>
<li><p>Futures and Options</p></li>
<li><p>Commodity Derivatives</p></li>
<li><p>Currency Derivatives</p></li>
</ul>    
</div>
<div className="col-6">
<ul>
<li><p>Stocks and IPOs</p></li>
<li><p>Direct Mutual Funds</p></li>
<li><p>Bonds and Government Securities</p></li>
</ul>
</div>
</div>
<img src="Assets/pressLogos.png" alt="Press Logos" style={{width: "80%"}} />
</div>


            </div>
        </div>
     );
}

export default Awards;