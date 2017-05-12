import React, { Component } from 'react'
import CommentInfo from '../previews/CommentInfo'
import styles from '../styles'

class Comments extends Component {
    constructor() {
        super()

        this.state = {
            list: [
                { body: 'Hello worlds', username: 'jimmyfargo', timestamp: '05/11/2017 10:30PM' },
                { body: 'Something', username: 'billy', timestamp: '05/11/2017 10:40PM' },
                { body: 'This is new', username: 'bobby', timestamp: '05/12/2017 09:24AM' },
                { body: 'Again, hello worlds!', username: 'fred', timestamp: '05/15/2017 11:03AM' }
            ]
        }
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
                </div>
            </div>
        )
    }
}

export default Comments