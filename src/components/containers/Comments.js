import React, { Component } from 'react'
import CommentInfo from '../presentation/CommentInfo'
import styles from './styles'

class Comments extends Component {
    constructor() {
        super()

        this.state = {
            list: [
                { body: 'Hello worlds', username: 'jimmyfargo', timestamp: '05/11/2017 10:30PM' },
                { body: 'Something', username: 'billy', timestamp: '05/11/2017 10:40PM' },
                { body: 'This is new', username: 'bobby', timestamp: '05/12/2017 09:24AM' },
                { body: 'Again, hello worlds!', username: 'fred', timestamp: '05/15/2017 11:03AM' }
            ],
            comment: {
                username: '',
                body: '',
                timestamp: ''
            }
        }
    }

    submitComment() {
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.comment)

        this.setState({
            list: updatedList
        })
    }

    updateComment(e) {
        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment[e.target.id] = e.target.value

        this.setState({
            comment: updatedComment
        })
    }

    render() {
        const commentItems = this.state.list.map((comment, i) => {
            return (
                <li key={ i }>
                    <CommentInfo currentComment={ comment } />
                </li>
            )
        })

        return (
            <div className="col-md-12">
                <h2>Comments: Zone 2</h2>
                <div style={ styles.comments.container }>
                    <ul style={ styles.comments.commentListItem }>
                        { commentItems }
                    </ul>

                    <input id="username" onChange={ this.updateComment.bind(this) } className="form-control" type="text" placeholder="Username" /><br />
                    <input id="body" onChange={ this.updateComment.bind(this) } className="form-control" type="text" placeholder="Comment" /><br />
                    <input id="timestamp" onChange={ this.updateComment.bind(this) } className="form-control" type="text" placeholder="Timestamp" /><br />
                    <button className="btn btn-info" onClick={ this.submitComment.bind(this) }>Submit Comment</button>
                </div>
            </div>
        )
    }
}

export default Comments