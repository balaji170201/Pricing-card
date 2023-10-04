import React from 'react';

const card = () => {
    return (
        <React.Fragment>
            <div className="cards">
                <h4 className="grey">FREE</h4>
                <h1>$0/month</h1>
                <hr/>
                <ul>
                    <li><p>Single User</p></li>
                    <li><p>50GB Storage</p></li>
                    <li><p>Unlimited Public Projects</p></li>
                </ul>
                <ul className='wrong'>
                    <li><p className="grey">Community Access</p></li>
                    <li><p className="grey">Unlimited Private Projects</p></li>
                    <li><p className="grey">Dedicated Phone Support</p></li>
                    <li><p className="grey">Free Subdomain</p></li>
                    <li><p className="grey">Monthly Status Reports</p></li>
                </ul>
                
                <button className='button'><strong>BUTTON</strong></button>
            </div>
        </React.Fragment>
    );
}

export default card;