import React, { Component } from 'react'
import ZoneInfo from '../presentation/ZoneInfo'
import superagent from 'superagent'

class Zones extends Component {
    constructor() {
        super()

        this.state = {
            zone: {
                name: '',
                zipCode: ''
            },
            list: []
        }
    }

    componentDidMount() {
        superagent.get('/api/zone')
            .query(null)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    alert('ERROR: ', err)
                    console.log(err)
                    return
                }

                let results = response.body.results
                this.setState({
                    list: results
                })
            })
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
            <div>
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