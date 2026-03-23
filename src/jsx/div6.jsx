import React from 'react';
import c1 from '../images/toprak-leasing.svg';
import c2 from '../images/glorix.svg';
import c3 from '../images/woo.png';
import c4 from '../images/rolf-leasing.svg';
import c5 from '../images/unilabs.svg';


function Div6() {
    return (
        <div className="child6">
            <br /><br /><br /><br />
            <div className="companies">
                <div className="comp1">
                    <img src={c1} alt="toprak" height="100%" width="100%" />
                </div>
                <div className="comp2">
                    <img src={c2} alt="glorix" height="100%" width="100%" />
                </div>
                <div className="comp3">
                    <img src={c3} alt="woo" height="100%" width="100%" />
                </div>
                <div className="comp4">
                    <img src={c4} alt="rolf-leasing" height="100%" width="100%" />
                </div>
                <div className="comp5">
                    <img src={c5} alt="unilabs" height="100%" width="100%" />
                </div>
            </div>
        </div>
    );
}

export default Div6;
