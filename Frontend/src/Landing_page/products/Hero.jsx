import React from 'react';

function Hero() {
    return ( 
        <div className="cantainer">
            <div className="row text-center mt-5 p-5">
                <h2 className=''>Zerodha Products</h2>
                <h6 className='text-muted mt-2'>
                    Sleek, modern, and intuitive trading platforms
                </h6>
                <p className='mt-2 text-muted'>Check out our <a href="" style={{textDecoration: "none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i> </a></p>
            </div>
        </div>
     );
}

export default Hero;