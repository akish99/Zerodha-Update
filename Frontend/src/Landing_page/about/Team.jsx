import React from 'react';

function Team() {
    return ( 
            <>
            <div className="cantainer border-top">
                <div className="row text-center mt-5 ">
                    <h2>People</h2>
                </div>
                <div className="row text-muted fs-6">
                   <div className="col-6 p-5 text-center">
                    <img src="Assets/nithinKamath.jpg" alt="" style={{borderRadius: "100%", width: "45%"}}/>
                    <h4 className='mt-3'>Nithin Kamath</h4>
                    <h6>Founder CEO</h6>
                    </div>
                   <div className="col-6 p-5 " style={{lineHeight: "28px"}}>
<p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
<p>Playing basketball is his zen.</p>
<p>Connect on Homepage / TradingQnA / Twitter</p>
                   </div>
                </div>
            </div>
        </>
     );
}

export default Team;