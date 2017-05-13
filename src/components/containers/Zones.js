import React, { Component } from 'react'
import ZoneInfo from '../presentation/ZoneInfo'
import styles from './styles'
import { APIManager } from '../../utils'

class Zones extends Component {
    constructor() {
        super()

        this.state = {
            zone: { name: '', zipCode: '' },
            list: []
        }
    }

    // will run everytime we render 
    // the comments container
    componentDidMount() {
        APIManager.get('/api/zone', null, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message)
                console.log(err.message)
                return
            }

            this.setState({
                list: response.results
            })
        })
    }

    addZone() {
        let updateZone = Object.assign({}, this.state.zone)
        updateZone.zipCodes = updateZone.zipCode.split(',')

        APIManager.post('/api/zone', updateZone, (err, response) => {
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

    updateZone(e) {
        let updatedZone = Object.assign({}, this.state.zone)
        let id = e.target.id
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