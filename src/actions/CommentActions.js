module.exports = {
    initComments: (comments) => {
        return {
            type: 'INIT_COMMENTS',
            payload: comments
        }
    },

    addComment: (comment) => {
        return {
            type: 'ADD_COMMENT', 
            payload: comment 
        }
    },

    deleteComment: (comment) => {
        return { 
            type: 'DEL_COMMENT', 
            payload: comment
        }
    }
}