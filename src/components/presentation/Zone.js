import React, { Component } from 'react'
import styles from './styles'
class Zone extends Component {

	render(){
		const zoneStyle=styles.zone
		return(
			<div style={zoneStyle.container}>
				<h2 style={zoneStyle.header}><a href="#" style={zoneStyle.title}>{this.props.currentZone.name}</a></h2>
				<span className="detail">{this.props.currentZone.zipCode} </span><br/><br/>
				<span>{this.props.currentZone.numComment} Comments</span>
			</div>
		)
	}
}
export default Zone