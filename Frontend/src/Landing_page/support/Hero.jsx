import React from 'react';

function Hero() {
    return (
        <div className="cantainer-fluid" id='supportHero'>
            <div className="p-" id='supportWrapper'>
                <h5>Support Portal</h5>
                <a href=""><h5>Track Tickets</h5></a>
            </div>

            <div className="row p-5 m-5">
            <div className="col-6 p-5">
                <h5>Search for an answer or browse help topics to create a ticket</h5>
                <input type="text" placeholder='Eg: how do I activate F&O, why is my order getting rejected ...' /><br />
<a href="">Track account opening </a>
<a href="">Track segment activation </a>
<a href="">Intraday margins</a>
<a href="">Kite user manual</a>
                
            </div>
            <div className="col-6 p-5" >
<h3>Featured</h3>
<ol>
    <li><a href="">Exclusion of F&O contracts on 8 securities from August 29, 2025
 </a></li>
    <li><a href="">Revision in expiry day of Index and Stock derivatives contracts
 </a></li>
</ol>
            </div>
            </div>
        </div>
    );
}

export default Hero;