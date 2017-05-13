import React, { Component } from 'react'

class Success extends Component {
    render() {
        retrun (
            <div className="alert alert-success" role="alert">
                { this.props.successMessage }
            </div>
        )
    }
}

export default Success