import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'


const Menu = () => {
    return (
        <div className="nav-menu">
            <ul>
                <li className="bg-lightblue"><Link to="/">home</Link></li>
                <li className="bg-lime"><Link to="/movie">Movie</Link></li>
                <li className="bg-violet"><Link to="/television">television</Link></li>
                <li className="bg-lightblue"><Link to="/travel">travel</Link></li>
                <li className="bg-orange"><Link to="/fashion">fashion</Link></li>
                <li className="bg-red"><Link to="/archives">archives</Link></li>
                <li className="bg-grey"><Link to="/contact-us">contact us</Link></li>
            </ul>
        </div>
    )
}

export default Menu