import React, { Component } from 'react'
import ZoneInfo from '../presentation/ZoneInfo'

class Zones extends Component {
    constructor() {
        super()

        this.state = {
            list: [
                { name: "Zone 1", zipCode: "75039", numOfComments: 10 },
                { name: "Zone 2", zipCode: "75049", numOfComments: 20 },
                { name: "Zone 3", zipCode: "33569", numOfComments: 14 },
                { name: "Zone 4", zipCode: "33558", numOfComments: 1 }
            ]
        }
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
            </div>
        )
    }
}

export default Zones