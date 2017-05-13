import React, { Component } from 'react'

class Error extends Component {
    render() {
        retrun (
            <div className="alert alert-danger" role="alert">
                { this.props.errorMessage }
            </div>
        )
    }
}

export default Error