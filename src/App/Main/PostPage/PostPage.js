import React from 'react'
import './PostPage.css'
import reversedPosts, {getPostsMap} from '../PostList/posts'
import CommentForm from '../../../common/features/CommentForm';
import UserCommentForm from '../../../common/features/UserCommentForm';
import {connect} from 'react-redux'
import {keys} from 'lodash'


const PostPage = ({
    postsMap = getPostsMap(reversedPosts),
    match,
    userCommentId,
    isLiked = false,
    addLike,
    removeLike

}) => {

    const changeLike = () => {
        if (isLiked) {
            removeLike(match.params.id)
        }
        else addLike(match.params.id)
}

    return (
        <div className="c-post-wrap">
        <div className="c-post-date">
            <span className="bg-orange post-day">{
                    (postsMap[match.params.id].postDay < 10) ? '0' + postsMap[match.params.id].postDay
                     : postsMap[match.params.id].postDay
                }
            </span>
            <span className="bg-lightblue post-month">{postsMap[match.params.id].postMonth}</span>
        </div>
        <div className="post-title">{postsMap[match.params.id].title}</div>
        <div className="post-description">{postsMap[match.params.id].shortDescription}</div>
        <div className="image-post-wrap">
            <div className="post-image">
                <img src={postsMap[match.params.id].image} alt="" width="610"/>
            </div>
        </div>
        <div className="post-description">{postsMap[match.params.id].fullDescription}</div>
        <div className="row">
        <button className="like-btn" onClick={()=>changeLike()}>
            {
                isLiked ?  <i className="fas fa-heart"></i>:<i className="far fa-heart"></i>
            }
        </button>
        </div>
        <div className="write-comment-title">write comment</div>
        <CommentForm 
            id={postsMap[match.params.id].id}
        />
        <div className="posted-comments-title">comments</div>
        {
            keys(userCommentId).map((commentId) => {
                return (
                    <div key={commentId}>
                    <UserCommentForm 
                        commentId={userCommentId[commentId]}
                        id={match.params.id}
                    />
                </div>
                )
            })
        }

    </div>
    )
}

const mapStateToProps = (state, props) => ({
    userCommentId: state.addUserComment[props.match.params.id],
    stateForRemove: state.addUserComment,
    isLiked: state.postsLike[props.match.params.id]

    
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) => dispatch({
        type: "LIKE",
        id: id,
    }),
    removeLike: (id) => dispatch({
        type: "DISLIKE",
        id: id,
    })
})


export default connect(mapStateToProps, mapDispatchToProps)(PostPage)