import img1 from '../images/office.jpg';
import img2 from '../images/kitchen.jpg';
import img3 from '../images/carwash.jpg';
import img4 from '../images/factory.jpg';

function Div4() {
    return (
        <div className="child4">
            <p id="p2h">Our best offers</p>
            <div className="offers">
                <div className="oleft">
                    <div className="office">
                        <img src={img1} alt="office" className="offerimg" />
                        {/* <div className="cost">
                            <i class="fa-solid fa-money-bill"></i>&nbsp;&nbsp;&nbsp;$820&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa-solid fa-clock"></i>&nbsp;&nbsp;&nbsp;5 hrs
                        </div> */}
                        <h3>Office cleaning</h3>
                        <p className="offer-description">Best Cleaning Service Provider<br />Office Cleaning</p>
                        <div className="star">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <input type="button" value="Available" className="offerbt" />
                    </div>

                    <div className="car">
                        <img src={img3} alt="car wash" className="offerimg" />
                        {/* <div className="cost">
                            <i class="fa-solid fa-money-bill"></i>&nbsp;&nbsp;&nbsp;$240&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa-solid fa-clock"></i>&nbsp;&nbsp;&nbsp;2 hrs
                        </div> */}
                        <h3>Car Washing</h3>
                        <p className="offer-description">Best Cleaning Service Provider<br /> Car Washing</p>
                        <div className="star">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <input type="button" value="Available" className="offerbt" />
                    </div>
                </div>

                <div className="oright">
                    <div className="kitchen">
                        <img src={img2} alt="kitchen" className="offerimg" />
                        {/* <div className="cost">
                            <i class="fa-solid fa-money-bill"></i>&nbsp;&nbsp;&nbsp;$640&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa-solid fa-clock"></i>&nbsp;&nbsp;&nbsp;4 hrs
                        </div> */}
                        <h3>Kitchen cleaning</h3>
                        <p className="offer-description">Best Cleaning Service Provider <br /> Kitchen Cleaning</p>
                        <div className="star">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <input type="button" value="Available" className="offerbt" />
                    </div>

                    <div className="factory">
                        <img src={img4} alt="factory" className="offerimg" />
                        {/* <div className="cost">
                            <i class="fa-solid fa-money-bill"></i>&nbsp;&nbsp;&nbsp;$6800&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa-solid fa-clock"></i>&nbsp;&nbsp;&nbsp;30 hrs
                        </div> */}
                        <h3>Factory cleaning</h3>
                        <p className="offer-description">Best Cleaning Service Provider<br /> Factory Cleaning</p>
                        <div className="star">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <input type="button" value="Available" className="offerbt" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Div4;
