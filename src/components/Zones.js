import React, { Component } from 'react'
import ZoneInfo from './ZoneInfo'

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
        const listItems = this.state.list.map((zone, i) => {
            return (
                <li><ZoneInfo currentZone={ zone } /></li>
            )
        })

        return (
            <div>
                <ol>
                    { listItems }
                </ol>
            </div>
        )
    }
}

export default Zones