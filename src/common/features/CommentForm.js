import React,{Component} from 'react'
import './CommentForm.css'
import {connect} from 'react-redux'



class CommentForm extends Component {
    
    state = {
        usersComments: [],
    }

    addUserName = (e) => {
        this.setState({
            userName: e.target.value
        })
    }
    addUserEmail = (e) => {
        this.setState({
            userEmail: e.target.value
        })
    }
    addUserComment = (e) => {
        this.setState({
            userComment: e.target.value
        })
    }
    
    initializeState = () => {
        const {
            id,
            postUserComment,
        } = this.props

        this.setState({
            userName: '',
            userEmail: '',
            userComment: ''
        })

        if ((!this.state.userName && !this.state.userComment) || (this.state.userName && !this.state.userComment)
            || (!this.state.userName && this.state.userComment)) {
            return alert('Please, add "Name" and "Comment')
        }
        else if (this.state.userName && this.state.userComment) {
            return postUserComment(id, this.state.userName, this.state.userEmail, this.state.userComment)
        }
    }

    render () {

        return (
            <div className="post-page-write-comment row">
                <div className="write-comment-input-wrap">
                    <div className="col-3">
                        <span>name :</span>
                    </div>
                    <div className="col-9">
                        <input type="text" onChange={this.addUserName} value={this.state.userName}/>
                    </div>
                </div>
                <div className="write-comment-input-wrap">
                <div className="col-3">
                        <span>email :</span>
                    </div>
                    <div className="col-9">
                        <input type="text" onChange={this.addUserEmail} value={this.state.userEmail}/>
                    </div>
                </div>
                <div className="write-comment-input-wrap">
                <div className="col-3">
                        <span>comment :</span>
                    </div>
                    <div className="col-9">
                        <textarea type="text" onChange={this.addUserComment} value={this.state.userComment}/>
                    </div>
                </div>
                <button onClick={this.initializeState}>post comment</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    postUserComment: (id, name, email, comment) => dispatch ({
        type: "POST_USER_COMMENT",
        id: id,
        name: name,
        email: email,
        comment: comment,
        userId: Date.now()

    })
})





export default connect(null, mapDispatchToProps)(CommentForm)