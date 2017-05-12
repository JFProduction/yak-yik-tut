import React, { Component } from 'react'
import styles from '../styles'

class ZoneInfo extends Component {
    render() {
        const zoneStyle = styles.zoneInfo
        return (
            <div style={ zoneStyle.container }>
                <h2 style={ zoneStyle.header }>
                    <a style={ zoneStyle.zoneName } href="#">
                        { this.props.currentZone.name }
                    </a>
                </h2>
                <span className={ zoneStyle.detail }>{ this.props.currentZone.zipCode }</span><br />
                <span className={ zoneStyle.detail }>{ this.props.currentZone.numOfComments } Comments</span>
            </div>
        )
    }
}

export default ZoneInfo