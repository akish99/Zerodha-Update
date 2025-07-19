import React from 'react';

function Universe() {
    return ( 
        <>
        <div className="cantainer">
            <div className="row p-5 text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className="col-4 p-3 mt-5 ">
                   <img src="Assets/zerodhaFundhouse.png" alt="" style={{width: "40%"}}/>
                   <p className='mt-3 text-muted'>Our asset management venture <br />
that is creating simple and transparent index <br />
funds to help you save for your goals.
</p>
                </div>
                <div className="col-4 p-3 mt-5 ">
                   <img src="Assets/sensibullLogo.svg" alt="" style={{width: "40%"}}/>
                   <p className='mt-3 text-muted'>Options trading platform that lets you <br />
create strategies, analyze positions, and examine <br />
data points like open interest, FII/DII, and more.
</p>
                </div>
                <div className="col-4 p-3 mt-5 ">
                   <img src="Assets/smallcaseLogo.png" alt="" style={{width: "40%"}}/>
                   <p className='mt-3 text-muted'>Investment research platform <br />
that offers detailed insights on stocks, <br />
sectors, supply chains, and more.
</p>
                </div>
                <div className="col-4 p-3 mt-5 ">
                   <img src="Assets/streakLogo.png" alt="" style={{width: "40%"}} />
                   <p className='mt-3 text-muted'>Systematic trading platform <br />
that allows you to create and backtest <br />
strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5 ">
                   <img src="Assets/smallcaseLogo.png" alt="" style={{width: "40%"}} />
                   <p className='mt-3 text-muted'>Thematic investing platform <br />
that helps you invest in diversified <br />
baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-5 ">
                   <img src="Assets/dittoLogo.png" alt="" style={{width: "40%"}} />
                   <p className='mt-3 text-muted'>Personalized advice on life <br />
and health insurance. No spam <br />
and no mis-selling.
Sign up for free</p>
                </div>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{ width: "18%" , margin: "0 auto"}}>Sign up now</button>
            </div>
        </div>
        </>
     );
}

export default Universe;