import React, { Component } from 'react'

class CreateComment extends Component {
    constructor() {
        super()

        this.state = {
            comment: { username: '', body: '' }
        }
    }

    updateComment(e) {
        let updateComment = Object.assign({}, this.state.comment)
        updateComment[e.target.id] = e.target.value

        this.setState({
            comment: updateComment
        })
    }

    addComment() {
        this.props.onCreate(this.state.comment)
    }

    render() {
        return (
            <div>
                <h3>Create Comment</h3>
                <input onChange={ this.updateComment.bind(this) } id="username" className="form-control" type="text" placeholder="Username" /><br />
                <input onChange={ this.updateComment.bind(this) } id="body" className="form-control" type="text" placeholder="Comment" /><br />
                <button onClick={ this.addComment.bind(this) } className="btn btn-info">Submit Comment</button>
            </div>
        )
    }
}

export default CreateComment