import React from 'react'
import './SidebarArchivesListItem.css'
import {Link} from 'react-router-dom'
import {scrollPost} from '../PostList/posts'


const SidebarArchivesListItem = ({
    id,
    title,
    category
}) => {
    return (
        <div className="sidebar-archives-item">
            <div className="sidebar-archives-title" onClick={() => scrollPost()}>
                <Link to={`/${category}/id=${id}`}>{title}</Link>
            </div>
        </div>
    )
}

export default SidebarArchivesListItem