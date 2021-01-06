import React from 'react';
import 'bulma/css/bulma.css'
import {Link} from 'gatsby'

let Navbar = () => {
    return(
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="subtitle">What Does Google Know?</Link>
            </div>
        </nav>
        </>
    )
}


export default Navbar