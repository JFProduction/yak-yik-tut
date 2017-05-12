import React, { Component } from 'react'
import ZoneInfo from '../presentation/ZoneInfo'

class Zones extends Component {
    constructor() {
        super()

        this.state = {
            zone: {
                name: '',
                zipCode: ''
            },
            list: [
                { name: "Zone 1", zipCode: "75039", numOfComments: 10 },
                { name: "Zone 2", zipCode: "75049", numOfComments: 20 },
                { name: "Zone 3", zipCode: "33569", numOfComments: 14 },
                { name: "Zone 4", zipCode: "33558", numOfComments: 1 }
            ]
        }
    }

    addZone() {
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.zone)

        this.setState({
            list: updatedList
        })
    }

    updateZone(e) {
        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone[e.target.id] = e.target.value

        this.setState({
            zone: updatedZone
        })
    }

    render() {
        const zoneItems = this.state.list.map((zone, i) => {
            return (
                <li key={ i } style={{ listStyle: 'none' }}>
                    <ZoneInfo currentZone={ zone } />
                </li>
            )
        })

        return (
            <div className="col-md-6">
                <ol>
                    { zoneItems }
                </ol>

                <input id="name" className="form-control"  onChange={ this.updateZone.bind(this) } type="text" placeholder="Name" /><br />
                <input id="zipCode" className="form-control" onChange={ this.updateZone.bind(this) } type="text" placeholder="Zip Code" /><br />
                <button className="btn btn-danger" onClick={ this.addZone.bind(this) }>Submit Zone</button>
            </div>
        )
    }
}

export default Zones