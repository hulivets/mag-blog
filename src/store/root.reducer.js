import {combineReducers} from 'redux'
import addUserCommentReducer from './add.user.comment.reducer';
import PostsLikeReducer from './posts.like.reducer';

const rootReducer = combineReducers({
    addUserComment: addUserCommentReducer,
    postsLike: PostsLikeReducer
})

export default rootReducer