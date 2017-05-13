import React, { Component } from 'react'
import styles from './styles'

class ZoneInfo extends Component {
    constructor() {
        super()

        this.state = {
            delBtnHover: false,
            zoneHover: false
        }
    }

    delHover() {
        this.setState({
            delBtnHover: !this.state.delBtnHover
        })
    }

    zoneHover() {
        this.setState({
            zoneHover: !this.state.zoneHover
        })
    }

    changeSelected(e) {
        console.log(this.props.zoneIndex)
        this.props.select(this.props.zoneIndex)
    }

    deleteZone(e) {
        this.props.delete(this.props.zoneIndex)
    }

    render() {
        const zoneStyle = styles.zoneInfo
        const zipCode = this.props.currentZone.zipCodes[0]
        const title = (this.props.isSelected) 
            ? <a style={ zoneStyle.zoneName } href="#">{ this.props.currentZone.name }</a> 
            : <a href="#">{ this.props.currentZone.name }</a>

        return (
            <div style={ !(this.state.zoneHover) ? zoneStyle.container : zoneStyle.containerHover }
                    onMouseOver={ this.zoneHover.bind(this) } onMouseOut={ this.zoneHover.bind(this) }>
                <span onMouseOver={ this.delHover.bind(this) } onMouseOut={ this.delHover.bind(this) } 
                    className="glyphicon glyphicon-trash" title={ "Delete Zone: " + this.props.currentZone.name }
                    style={ !(this.state.delBtnHover) ? styles.universal.deleteBtn : styles.universal.deleteBtnHover }
                    onClick={ this.deleteZone.bind(this) }></span>
                <h2 style={ zoneStyle.header } onClick={ this.changeSelected.bind(this) }>
                    { title }
                </h2>
                <span className={ zoneStyle.detail }>{ zipCode }</span><br />
                <span className={ zoneStyle.detail }>{ this.props.currentZone.numOfComments } Comments</span>
            </div>
        )
    }
}

export default ZoneInfo