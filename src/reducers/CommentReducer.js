const initialState = {
    comments: []
}

const CommentReducer = (state=initialState, actions) => {
    console.log(state)
    let newState = Object.assign({}, state)
    switch (actions.type) {
        case 'INIT_COMMENTS': {
            newState.comments = actions.payload
            break
        }
        case 'ADD_COMMENT': {
            newState.comments.push(actions.payload)
            break
        }
        case 'DEL_COMMENT': {
            newState.comments.filter((comment) => {
                return comment['_id'] !== actions.payload['_Id']
            })
            break
        }
    }
    return newState
}

export default CommentReducer