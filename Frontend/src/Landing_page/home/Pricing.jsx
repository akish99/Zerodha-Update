import React from 'react';

function Pricing() {
    return (  
        <div className="cantainer mb-5 d-flex justify-content-center ml-5">
            <div className="row ml-5">
                <div className="col-5 ml-5">
<h2 className='mb-3'>Unbeatable pricing</h2>
<p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="" style={{textDecoration: "none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-1"></div>
                <div className="col-6 mb-5">
<div className="row text-center">
    <div className="col-6 border p-2">
        <h1 className='mb-3'>₹0</h1>
        <p>Free quity delivery and <br></br> direct mutual funds.</p>
    </div>
    <div className="col-6 border p-2">
<h1 className='mb-3'>₹20</h1>
        <p>Intraday and F&0</p>
    </div>
</div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;