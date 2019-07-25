import React from 'react'
import {Link} from 'react-router-dom'
import './Logo.css'


const Logo = () => {
    return (
        <Link to="/"><div className="logo-brand">
            M<span>a</span>g<span>B</span>lo<span>g</span>
        </div></Link>
    )
}

export default Logo