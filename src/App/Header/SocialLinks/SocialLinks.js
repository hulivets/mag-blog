import React from 'react'
import {Link, Route} from 'react-router-dom'
import './SocialLinks.css'


const SocialLinks = () => {
    return (
        <div className="social-btn-wrap">
            <div className="rss bg-orange social-btn-style">
                <i className="fas fa-rss"></i>
            </div>
            <Link to="/facebook" target="_blank">
                <div className="facebook bg-violet social-btn-style">
                    <i className="fab fa-facebook-f"></i>
                </div>
            </Link>    
            <Link to="/tumblr" target="_blank">
                <div className="tumbler bg-lightblue social-btn-style">
                    <i className="fab fa-tumblr"></i>
                </div>
            </Link>
            {
                <div>
                    <Route path='/facebook' render={() => { 
                        return window.location = 'https://www.facebook.com'
                }}/>
                    <Route path='/tumblr' render={() => {
                    return window.location = 'https://www.tumblr.com'
                }}/>
                </div>
            }
        </div>
    )
}

export default SocialLinks