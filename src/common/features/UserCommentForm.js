import React from 'react'
import './UserCommentForm.css'
import {connect} from 'react-redux'

const UserCommentForm = ({
    commentId,
    id,
    removeComment,
}) => {
    return (
        <div className="post-page-user-comment">
            <button onClick={() => removeComment(id, commentId.userId)}>Delete</button>
            <div className="posted-user-comment row">
                <div className="col-3">
                    <div className="user-image"></div>
                </div>
                <div className="col-9">
                    <div className="user-name-wrap row">
                        <span className="user-name">{commentId.userName}</span>
                        <span className="posted-comment-date"></span>
                    </div>
                    <div className="user-comment">{commentId.userComment}
                        
                    </div>
                    <div className="comment-bottom row">
                        <div className="col-10">
                            <div className="comment-line-decoration"></div>
                        </div>
                        <div className="col-2">
                            <span className="comment-reply"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeComment: (id, userId) => dispatch({
       type: "REMOVE_USER_COMMENT",
       id: id,
       userId: userId 
    })
})

export default connect(null, mapDispatchToProps)(UserCommentForm)