import React from 'react';

import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';


function Div5() {
    return (
        <div className="child5">
            <br /><br /><br />
            <div className="happy">
                <h1>Happy Customers</h1>
            </div>
            <div className="customers">
                <div className="c1">
                    <div className="r1">
                        <div className="part1">
                            <br /><br />
                            <div className="profile" style={{ backgroundColor: 'rgb(117, 226, 90)' }}>
                                <img src={p1} alt="profile" height="100%" width="100%" />
                            </div>
                            <div className="name">RutherFord<br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className="part2">
                            <p>"Our office has never looked better. The cleaning staff arrives on time, is professional, and pays close attention to every corner. Highly recommended!"</p>
                        </div>
                    </div>
                    <div className="r2">
                        <div className="part1">
                            <br /><br />
                            <div className="profile" style={{ backgroundColor: 'rgb(171, 56, 237)' }}>
                                <img src={p2} alt="profile" height="100%" width="100%" />
                            </div>
                            <div className="name">Crawley<br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className="part2">
                            <p>"They deep cleaned our office pantry kitchen—microwave, countertops, and even the exhaust fans. Impressive job!"</p>
                        </div>
                    </div>
                </div>
                <div className="c2">
                    <div className="r1">
                        <div className="part1">
                            <br /><br />
                            <div className="profile" style={{ backgroundColor: 'rgb(33, 241, 182)' }}>
                                <img src={p3} alt="profile" height="100%" width="100%" />
                            </div>
                            <div className="name">Elon <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className="part2">
                            <p>"They handled my company car like pros—inside and out, it's sparkling. Quick service too."</p>
                        </div>
                    </div>
                    <div className="r2">
                        <div className="part1">
                            <br /><br />
                            <div className="profile" style={{ backgroundColor: 'rgb(253, 49, 253)' }}>
                                <img src={p4} alt="profile" height="100%" width="100%" />
                            </div>
                            <div className="name">Marie <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className="part2">
                            <p>"They tackled oil stains, industrial dust, and machinery areas. We were stunned by the transformation."</p>
                        </div>
                    </div>
                </div>
                <div className="c3">
                    <div className="r1">
                        <div className="part1">
                            <br /><br />
                            <div className="profile" style={{ backgroundColor: 'rgb(237, 56, 110)' }}>
                                <img src={p5} alt="profile" height="100%" width="100%" />
                            </div>
                            <div className="name">Josh<br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className="part2">
                            <p>"They wore PPE, followed factory safety norms, and still managed a detailed clean-up. Very professional."</p>
                        </div>
                    </div>
                    <div className="r2">
                        <div className="part1">
                            <br /><br />
                            <div className="profile" style={{ backgroundColor: 'rgb(215, 255, 84)' }}>
                                <img src={p6} alt="profile" height="100%" width="100%" />
                            </div>
                            <div className="name">Wanes<br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className="part2">
                            <p>"Food areas must be spotless, and this team understands that. They used non-toxic cleaners, which is a big plus."</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="trust">Trusted by <br /> companies</div>
        </div>
    );
}

export default Div5;
