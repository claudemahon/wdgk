import React from 'react';
import 'bulma/css/bulma.css'
import {Link} from 'gatsby'
import '../pages/style.css'


let Navbar = () => {
    return(
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="logo navbar-item">What Does Google Know?</Link>
            </div>
        </nav>
        </>
    )
}


export default Navbar