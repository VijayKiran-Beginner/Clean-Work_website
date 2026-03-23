import cleaning from '../images/bgcleaning.png'
function Div3() {
    return (
        <div className="div3">
            <div className="div3-subdiv1">
                <h1>Reliable & Fast Cleaning</h1>
                <h1>Service</h1>
                <p><span>Clean Work</span> is a Bootstrap v.5.1.3 HTML CSS template for free download provided
                    by Tooplate. You can use this layout for any purpose. Images are taken from
                    <span>FreePik</span> and <span>WorldVectorLogo</span> websites.
                   </p>
                   <p>
                   You <b>may not</b> redistribute this template ZIP file on any other template collection
                   Website. Please <span>contact us</span> for more info. Thank you.
                   </p>
            </div>
            <div className="div3-subdiv2">
                <img src={cleaning} alt="" />
                <div className="div3-subdiv3">
                        <h3>Need Help?</h3>
                        <h3>Please Call us:</h3>
                        <span><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;110-220-9800</span>
                </div>
            </div>
   
        </div>

    )
}

export default Div3