import React from 'react'
import {Link} from 'react-router-dom'
import {scrollPost} from '../PostList/posts'


const TopStoriesListItem = ({
    title,
    category,
    image,
    categoryStyle,
    id
}) => {
    return (
        <div className="top-post-style">
            <div className="top-story-image" onClick={() => scrollPost()}>
                <Link to={`/${category}/id=${id}`}><img src={image} alt="" width="400"/></Link>
            </div>
            <div className={categoryStyle} id="top-post-category">{category}</div>
            <div className="top-story-category-wrap">
            <i className="fas fa-caret-right"></i>
                <Link to={`/${category}/id=${id}`}>
                    <div className="top-story-title" onClick={() => scrollPost()}>{title}</div>
                </Link>    
            </div>
        </div>
    )
}

export default TopStoriesListItem
