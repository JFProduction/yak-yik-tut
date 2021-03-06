import React, { Component } from 'react'
import { CommentInfo, CreateComment } from '../presentation'
import styles from './styles'
import { APIManager } from '../../utils'

class Comments extends Component {
    constructor() {
        super()

        this.state = {
            list: []
        }
    }

    // will run everytime we render 
    // the comments container
    componentDidMount() {
        APIManager.get('/api/comment', null, (err, response) => {
            if (err) {
                alert('ERROR: ', err.message)
                console.log(err.message)
                return
            }
            
            this.setState({
                list: response.results
            })
        })
    }

    addComment(comment) {
        APIManager.post('/api/comment', comment, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message)
                console.log(err.message)
                return
            }

            let updatedList = Object.assign([], this.state.list)
            updatedList.push(response.result)

            this.setState({
                list: updatedList
            })
        })
    }

    deleteComment(index) {
        // for now i'll just let anyone delete comments
        let comment = Object.assign({}, this.state.list[index])
        APIManager.delete('/api/comment/' + comment['_id'], (err, result) => {
            if (err) {
                alert('ERROR: ' + err.message)
                console.log(err.message)
                return
            }

            if (result.status === 200) {
                alert(comment.username + '\'s Comment was Deleted')
                let updatedList = Object.assign([], this.state.list)
                updatedList = updatedList.filter((item) => {
                    return item['_id'] !== comment['_id']
                })

                this.setState({
                    list: updatedList
                })
            }
        })
    }

    render() {
        const commentItems = this.state.list.map((comment, i) => {
            return (
                <li key={ i }>
                    <CommentInfo commentIndex={ i } currentComment={ comment } 
                        delete={ this.deleteComment.bind(this) } /><hr />
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

                    <CreateComment onCreate={ this.addComment.bind(this) } />
                </div>
            </div>
        )
    }
}

export default Comments