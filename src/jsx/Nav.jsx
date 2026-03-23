import React from 'react'
// import Head from "./Head";
// import Home from "./Home"
// import Contact from "./Contact"
import { BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"

const Nav = () =>{

  return(
    <>
        <Router>
            <Link to='/home'>Home</Link><br/>   
            <Link to='/head'>Head</Link><br/>
            <Link to='/contact'>Contact</Link>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/head' element={<Head/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    </>
  )
}


export default Nav
