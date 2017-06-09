import React,{ Component} from 'react'
class Comment extends Component {
	render(){
		return(
			<div>
				<p style={{fontSize:20,fontWeight:600}}>{this.props.currentComment.body}</p>
				<span>{this.props.currentComment.username}</span>
				<span style={{marginLeft:12,marginRight:12}}>|</span>
				<span>{this.props.currentComment.timestamp}</span>
				<hr/>
			</div>
			)
	}
}
export default Comment