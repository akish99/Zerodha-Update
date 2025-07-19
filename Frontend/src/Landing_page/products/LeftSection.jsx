import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="cantainer mt-n3">
            <div className="row p-5">
                <div className="col-6 p-3">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col-6 p-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div >
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ marginLeft: "35px", textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay} style={{ textDecoration: "none" }}><img src="Assets/googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore} style={{ marginLeft: "25px", textDecoration: "none" }}><img src="Assets/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;