import React from 'react';

const Pay = () => {
    const pay ="https://www.freepngimg.com/download/payment_method/10-2-payment-method-png-pic.png"
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Pay your Money with :</h2>

            <div>
                <img className="img-fluid" src={pay} alt="" />
            </div>
            <br />
            <br />
        </div>
    );
};

export default Pay;