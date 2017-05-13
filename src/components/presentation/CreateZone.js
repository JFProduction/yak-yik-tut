import React, { Component } from 'react'

class CreateZone extends Component {
    constructor() {
        super()
        this.state = {
            zone: { name: '', zipCode: '' }
        }
    }

    updateZone(e) {
        let updateZone = Object.assign({}, this.state.zone)
        updateZone[e.target.id] = e.target.value

        this.setState({
            zone: updateZone
        })
    }

    addZone() {
        this.props.onCreate(this.state.zone)
    }

    render() {
        return (
            <div>
                <h3>Create Zone</h3>
                <input onChange={ this.updateZone.bind(this) } id="name" className="form-control" type="text" placeholder="Name" /><br />
                <input onChange={ this.updateZone.bind(this) } id="zipCode" className="form-control" type="text" placeholder="Zip Code" /><br />
                <button onClick={ this.addZone.bind(this) } className="btn btn-danger">Submit Zone</button>
            </div>
        )
    }
}

export default CreateZone