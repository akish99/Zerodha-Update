import React from 'react';

function CreateTicket() {
    return (
        <div className="cantainer">
            <div className="row mt-5 pl-5 pr-5">
                <h4 className='text-muted p-5'>To create a ticket, select a relevant topic</h4>
                <div className="col-4 mt-2 p-5">
                    <h6><i class="fa-solid fa-plus"></i>Account opening</h6>
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Resident individual</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Minor</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Non Resident Indian (NRI)</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Company, Partnership, HUF and LLP</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}></a>
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Glossary</a>
                </div>

                <div className="col-4 mt-2  p-5">
                    <h6><i class="fa-solid fa-plus"></i>Your Zerodha Account
                    </h6>
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Your Profile</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Account modification</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>
                        Client Master Report (CMR) and Depository Participant (DP)</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Nomination</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Transfer and conversion of securities</a>

                </div>

                <div className="col-4 mt-2 p-5">
                    <h6><i class="fa-solid fa-plus"></i>Kite</h6>
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>IPO</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Trading FAQs</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Margin Trading Facility (MTF) and Margins</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Charts and orders</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Alerts and Nudges</a>
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>General</a>
                </div>

            </div>


             <div className="row pl-5 pr-5">
                
                <div className="col-4 mb-2 p-5">
                    <h6><i class="fa-solid fa-plus"></i>Funds</h6>
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Add money</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Withdraw money</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Add bank accounts</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>eMandates</a> <br />
                     </div>


                <div className="col-4 mt-2 mb-2 p-5">
                    <h6><i class="fa-solid fa-plus"></i>Console
                    </h6>
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Portfolio</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Funds statement</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>
                       Reports</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Profile</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Segments</a>
                    


                </div>

                <div className="col-4 mt-2 mb-2 p-5">
                    <h6><i class="fa-solid fa-plus"></i>Coin</h6>
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Mutual funds</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>National Pension Scheme (NPS)</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Features on Coin</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>Payments and Orders</a> <br />
                    <a href="" style={{ textDecoration: "none", lineHeight: '2.5' }}>General</a>
                </div>
                





            </div>
        </div>
    );
}

export default CreateTicket;