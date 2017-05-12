import React, { Component } from 'react'
import styles from '../styles'

class CommentInfo extends Component {
    render() {
        const commentStyle = styles.comments
        return (
            <div style={ commentStyle.infoContainer }>
                <p style={ commentStyle.bodyWrapper }>{ this.props.currentComment.body }</p>
                <span style={ commentStyle.textWrapper }>{ this.props.currentComment.username }</span>
                <span style={ commentStyle.pipeWrapper }>|</span>
                <span style={ commentStyle.textWrapper }>{ this.props.currentComment.timestamp }</span>
            </div>
        )
    }
}

export default CommentInfo