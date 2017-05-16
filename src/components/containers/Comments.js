import React, { Component } from 'react'
import { CommentInfo, CreateComment } from '../presentation'
import styles from './styles'
import { APIManager } from '../../utils'
import store from '../../stores/Store'
import actions from '../../actions/CommentActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Comments extends Component {
    // will run everytime we render 
    // the comments container
    componentDidMount() {
        APIManager.get('/api/comment', null, (err, response) => {
            if (err) {
                alert('ERROR: ', err.message)
                console.log(err.message)
                return
            }
            this.props.initComments(response.results)
        })
    }

    addComment(comment) {
        APIManager.post('/api/comment', comment, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message)
                console.log(err.message)
                return
            }
            this.props.addComment(response.result)
        })
    }

    deleteComment(index) {
        // for now i'll just let anyone delete comments
        let comment = Object.assign({}, this.props.list[index])
        APIManager.delete('/api/comment/' + comment['_id'], (err, result) => {
            if (err) {
                alert('ERROR: ' + err.message)
                console.log(err.message)
                return
            }

            if (result.status === 200) {
                alert(comment.username + '\'s Comment was Deleted')
                this.props.deleteComment(comment)
            }
        })
    }

    render() {
        let commentItems

        if (this.props.list.length) {
            commentItems = this.props.list.map((comment, i) => {
                return (
                    <li key={ i }>
                        <CommentInfo commentIndex={ i } currentComment={ comment } 
                            delete={ this.deleteComment.bind(this) } /><hr />
                    </li>
                )
            })
        } else {
            commentItems = <h4>No Comments for the Zone Selected... Try creating one!!</h4>
        }

        return (
            <div className="col-md-12">
                <h2>Comments: Zone 2</h2>
                <div style={ styles.comments.container }>
                    <ul style={ styles.comments.commentListItem }>
                        { commentItems }
                    </ul>

                    <CreateComment onCreate={ this.addComment.bind(this) } />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.CommentReducer.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initComments: actions.initComments,
        deleteComment: actions.deleteComment,
        addComment: actions.addComment
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)