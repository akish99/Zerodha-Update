import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
       <div className="cantainer ">
            <div className="row p-5 mt-n3">
                
                <div className="col-6 p-5 d-flex justify-content-center flex-column">
                    <h1 className='mt-3'>{productName}</h1>
                    <p className='mt-3' style={{lineHeight: "1.5"}}>{productDescription}</p>
                    <div >
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                   
                </div>
                <div className="col-6 ">
                    <img src={imageURL} alt="" style={{width: "80%"}} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;