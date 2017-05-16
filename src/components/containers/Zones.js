import React, { Component } from 'react'
import { ZoneInfo, CreateZone } from '../presentation'
import styles from './styles'
import { APIManager } from '../../utils'
import store from '../../stores/Store'
import actions from '../../actions/ZoneActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Zones extends Component {
    // will run everytime we render 
    // the zones container
    componentDidMount() {
        APIManager.get('/api/zone', null, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message)
                console.log(err.message)
                return
            }

            if (response.status === 200) {
                this.props.initZones(response.results)
            }
        })
    }

    addZone(zone) {
        APIManager.post('/api/zone', zone, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message)
                console.log(err.message)
                return
            }

            if (response.status === 200) {
                this.props.addZone(response.result)
            }
        })
    }

    deleteZone(index) {
        let zone = Object.assign({}, this.props.list[index])
        APIManager.delete('/api/zone/' + zone['_id'], (err, result) => {
            if (err) {
                alert('ERROR: ' + err.message)
                console.log(err.message)
                return
            }

            if (result.status === 200) {
                alert(zone.name + ' Deleted')
                this.props.deleteZone(zone)
            }
        })
    }

    selectZone(index) {
        this.props.selectZone(index)
    }

    render() {
        let zoneItems
        if (this.props.list.length) {
            zoneItems = this.props.list.map((zone, i) => {
                let selected = (i === this.props.selected)
                return (
                    <li key={ i } style={{ listStyle: 'none' }}>
                        <ZoneInfo isSelected={ selected } currentZone={ zone } zoneIndex={ i }
                            select={ this.selectZone.bind(this) } delete={ this.deleteZone.bind(this) }/>
                    </li>
                )
            })
        } else {
            zoneItems = <h4>No Zones Yet... Try adding one!!</h4>
        }

        return (
            <div>
                <h2>All Zones</h2>
                <ol style={{ paddingLeft: 0 }}>
                    { zoneItems }
                </ol>

                <CreateZone onCreate={ this.addZone.bind(this) } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.ZoneReducer.zones,
        selected: state.ZoneReducer.selectedZone
    }
}

// this maps the dispatch services to the container's
// props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initZones: actions.initZones,
        addZone: actions.addZone,
        deleteZone: actions.deleteZone,
        selectZone: actions.selectZone
    }, dispatch)
}

// connects the redux layer to the zone's props
export default connect(mapStateToProps, mapDispatchToProps)(Zones)