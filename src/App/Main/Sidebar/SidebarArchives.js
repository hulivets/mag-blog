import React from 'react'
import SidebarArchivesList from './SidebarArchivesList';


const SidebarArchives = () => {
    return (
        <div className="sidebar-also-like">
             <div className="sidebar-title bg-violet text-color-white">archives</div>
             <SidebarArchivesList />
        </div>
    )
}

export default SidebarArchives