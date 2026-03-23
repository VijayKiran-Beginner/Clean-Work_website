import bubble from '../images/bubble.png';
import { Link, useNavigate } from 'react-router-dom';

function Div2() {
    const navigate = useNavigate();

    const handleExploreServices = () => {
        navigate('/services');
    };

    const handleIntroduction = () => {
        navigate('/introduction');
    };

    return (
        <div className="div2">
            {/* <div className="navbar">
                <div className="nav_div1">
                    <span><img src={bubble} alt="Clean Work Logo" /></span>
                    <h3>Clean Work</h3>
                </div>
                <div className="nav_linkdiv">
                    <Link to="/home" className='Links'>Home</Link>
                    <Link to="/about" className='Links'>About Us</Link>
                    <Link to="/pages" className='Links'>Pages</Link>
                    <Link to="/contact" className='Links'>Contact</Link>
                    <Link to="/getstarted" className='Links'>Get Started</Link>
                </div>
            </div> */}
            <div className="div2-subdiv">
                <h1>We clean your <span>Kitchen</span></h1>
                <div className="div2-btndiv">
                    <button className="btn" onClick={handleIntroduction}>Introduction</button>
                    <button className="btn" onClick={handleExploreServices}>Explore Services</button>
                </div>
            </div>
        </div>  
    );
}

export default Div2;