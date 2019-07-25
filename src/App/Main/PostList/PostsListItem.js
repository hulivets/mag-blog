import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {keys} from 'lodash'
import './PostsListItem.css'
import { scrollPost } from './posts';


const PostsListItem = ({
    postDay,
    postMonth,
    title,
    shortDescription,
    category,
    image,
    id,
    commentsQuantity,
    isLiked = false
}) => {
    return (
        <div className="c-post-wrap">
            <div className="c-post-date">
                <span className="bg-orange post-day">{
                        (postDay < 10) ? '0' + postDay : postDay
                    }
                </span>
                <span className="bg-lightblue post-month">{postMonth}</span>
            </div>
            <div className="post-title" onClick={() => scrollPost()}
            ><Link to={`/${category}/id=${id}`}>{title}</Link></div>
            <div className="post-description">{shortDescription}</div>
            <div className="image-post-wrap">
                <div className="post-image">
                    <img src={image} alt="" width="610"/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="post-category" onClick={() => scrollPost()}>
                        <Link to={`/${category}`}>Category : <span>{category}</span></Link>
                    </div>
                </div>
                <div className="col-6">
                    {
                        isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                    }
                    <i className="fas fa-comments"></i>
                    <span className="post-comments">{keys(commentsQuantity).length} Comments</span>
                </div>
                <div className="col-3">
                    <span className="post-read-more" onClick={() => scrollPost()}>
                        <Link to={`/${category}/id=${id}`}>Read more</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    commentsQuantity: state.addUserComment[props.id],
    isLiked: state.postsLike[props.id],
})

export default connect(mapStateToProps)(PostsListItem)