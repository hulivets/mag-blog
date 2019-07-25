import React from 'react'
import './Sidebar.css'
import SidebarTopStories from './SidebarTopStories';
import SidebarAlsoLike from './SidebarAlsoLike';
import SidebarArchives from './SidebarArchives';

const Sidebar = () => {
    return (
            <div style={{height: window.innerHeight-40, position: "relative", overflow: "scroll"}}>
                <div className="sidebar" style={{position: "absolute", top: 0, left: 0, minHeight: "100%"}} >
                   <SidebarTopStories />
                   <SidebarAlsoLike />
                   <SidebarArchives />
                </div>
            </div>
    )
}

export default Sidebar