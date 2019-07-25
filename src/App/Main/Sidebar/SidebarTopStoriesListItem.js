import React from 'react'
import {scrollPost} from '../PostList/posts'
import {Link} from 'react-router-dom'


const SidebarTopStoriesListItem = ({
    title,
    image,
    shortDescription,
    category,
    id
}) => {
    return (
        <div className="row">
            <div className="sidebar-top-stories-items">
                <div className="col-3">
                    <div className="sidebar-top-stories-img-wrap">
                        <img src={image} alt={title} width="100"/>
                    </div>
                </div>
                <div className="col-9">
                    <div className="sidebar-top-stories-title" onClick={() => scrollPost()}>
                        <Link to={`/${category}/id=${id}`}>{title}</Link>
                    </div>
                    <div className="sidebar-top-stories-description" onClick={() => scrollPost()}>
                    <Link to={`/${category}/id=${id}`}>
                        {shortDescription.substring(0, 100)+"..."}
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarTopStoriesListItem