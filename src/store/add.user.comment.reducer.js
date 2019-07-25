import {omit} from 'lodash'

const addUserCommentReducer = (state={}, action) => {
    switch(action.type) {
        case "POST_USER_COMMENT":
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.userId]: {
                        userName: action.name,
                        userEmail: action.email,
                        userComment: action.comment,
                        userId: action.userId
                    }
                }
            }
        case "REMOVE_USER_COMMENT":
            return  omit(state, action.id)
        default:
            return state    
    }
}

export default addUserCommentReducer

