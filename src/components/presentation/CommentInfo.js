import React, { Component } from 'react'
import styles from './styles'

class CommentInfo extends Component {
    constructor() {
        super()

        this.state = {
            delBtnHover: false
        }
    }

    delHover() {
        this.setState({
            delBtnHover: !this.state.delBtnHover
        })
    }

    deleteZone(e) {
        this.props.delete(this.props.commentIndex)
    }

    render() {
        const commentStyle = styles.comments
        return (
            <div style={ commentStyle.infoContainer }>
                 <span onMouseOver={ this.delHover.bind(this) } onMouseOut={ this.delHover.bind(this) } 
                    className="glyphicon glyphicon-trash" title={ "Delete Comment" }
                    style={ !(this.state.delBtnHover) ? styles.universal.deleteBtn : styles.universal.deleteBtnHover }
                    onClick={ this.deleteZone.bind(this) }></span>
                <p style={ commentStyle.bodyWrapper }>{ this.props.currentComment.body }</p>
                <span style={ commentStyle.textWrapper }>{ this.props.currentComment.username }</span>
                <span style={ commentStyle.pipeWrapper }>|</span>
                <span style={ commentStyle.textWrapper }>{ this.props.currentComment.timestamp }</span>
            </div>
        )
    }
}

export default CommentInfo