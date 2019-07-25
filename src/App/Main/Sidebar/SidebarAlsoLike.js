import React from 'react'
import SidebarAlsoLikeList from './SidebarAlsoLikeList';


const SidebarAlsoLike = () => {
    return (
        <div className="sidebar-also-like">
             <div className="sidebar-title bg-violet text-color-white">you might also like</div>
             <SidebarAlsoLikeList />
        </div>
    )
}

export default SidebarAlsoLike