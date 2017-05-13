import React, { Component } from 'react'
import { ZoneInfo, CreateZone } from '../presentation'
import styles from './styles'
import { APIManager } from '../../utils'

class Zones extends Component {
    constructor() {
        super()

        this.state = {
            selected: 0,
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

    addZone(zone) {
        APIManager.post('/api/zone', zone, (err, response) => {
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

    deleteZone(index) {
        let zone = Object.assign({}, this.state.list[index])
        console.log(zone['_id'])
        APIManager.delete('/api/zone/' + zone['_id'], (err, result) => {
            if (err) {
                alert('ERROR: ' + err.message)
                console.log(err.message)
                return
            }

            if (result.status === 200) {
                alert(zone.name + ' Deleted')
                let updatedList = Object.assign([], this.state.list)
                updatedList = updatedList.filter((item) => {
                    return item['_id'] !== zone['_id']
                })

                this.setState({
                    list: updatedList
                })
            }
        })
    }

    selectZone(index) {
        this.setState({
            selected: index
        })
    }

    render() {
        const zoneItems = this.state.list.map((zone, i) => {
            let selected = (i == this.state.selected)
            return (
                <li key={ i } style={{ listStyle: 'none' }}>
                    <ZoneInfo isSelected={ selected } currentZone={ zone } zoneIndex={ i }
                        select={ this.selectZone.bind(this) } delete={ this.deleteZone.bind(this) }/>
                </li>
            )
        })

        return (
            <div>
                <ol style={{ paddingLeft: 0 }}>
                    { zoneItems }
                </ol>

                <CreateZone onCreate={ this.addZone.bind(this) } />
            </div>
        )
    }
}

export default Zones