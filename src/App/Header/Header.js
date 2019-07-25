import React from 'react'
import Logo from './Logo/Logo';
import Search from './Search/Search';
import SocialLinks from './SocialLinks/SocialLinks';
import Menu from './Menu/Menu';


const Header = () => {
    return (
        <div className="container">
            <div className="header-wrap">
                <div className="row">
                    <div className="col-2">
                        <Logo      
                        />
                    </div>
                    <div className="col-7">
                        <Search />
                    </div>
                    <div className="col-3">
                        <SocialLinks />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header