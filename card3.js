import React from 'react';

const card3 = () => {
    return (
        <React.Fragment>
            <div className="cards">
                <h4 className="grey">PRO</h4>
                <h1>$49/month</h1>
                <hr/>
                <ul>
                    <li><p>Single User</p></li>
                    <li><p>50GB Storage</p></li>
                    <li><p>Unlimited Public Projects</p></li>
                    <li><p>Community Access</p></li>
                    <li><p>Unlimited Private Projects</p></li>
                    <li><p>Dedicated Phone Support</p></li>
                    <li><p>Free Subdomain</p></li>
                    <li><p>Monthly Status Reports</p></li>
                </ul>
                
                <button className='button'><strong>BUTTON</strong></button>
            </div>
        </React.Fragment>
    );
}

export default card3;