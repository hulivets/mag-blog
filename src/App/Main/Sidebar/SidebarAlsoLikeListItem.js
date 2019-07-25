import React from 'react'
import './SidebarAlsoLikeListItem.css'
import {Link} from 'react-router-dom'
import {scrollPost} from '../../Main/PostList/posts'


const SidebarAlsoLikeListItem = ({
    title,
    image,
    id,
    category
}) => {
    return (
        <div className="sidebar-also-like-item">
            <div className="row">
                <div className="col-3">
                    <div className="sidebar-also-like-img-wrap">
                        <img src={image} alt={title} width="100"/>
                    </div>
                </div>
                <div className="col-9">
                    <div className="sidebar-also-like-item-title" onClick={() => scrollPost()}>
                        <Link to={`/${category}/id=${id}`}>{title}</Link>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default SidebarAlsoLikeListItem
