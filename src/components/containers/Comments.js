import React, {Component} from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
class Comments extends Component{
	constructor() {
		super();
		this.state = {
			comment:{
					username:'',
					body:'',
					timestamp:''
			},
			list:[
			]
		}
	};
	submitComment(){
			console.log('submitComment:'+JSON.stringify(this.state.comment))
			 let updatedList = Object.assign([],this.state.list)
			 updatedList.push(this.state.comment)

			 this.setState({
			 	list:updatedList
			 })
		}
	updateUsername(event){
			// console.log('update username:'+event.target.value)
			let updatedComment = Object.assign({},this.state.comment)
			updatedComment['username'] =event.target.value
			this.setState({
				comment:updatedComment
			})
		}
	updateBody(event){
		// console.log('update Body:'+event.target.value)
		let updatedComment = Object.assign({},this.state.comment)
			updatedComment['body'] =event.target.value
			this.setState({
				comment:updatedComment
			})
	}
	updatetimeStamp(event){
		// console.log('update timeStamp:'+event.target.value)
		let updatedComment = Object.assign({},this.state.comment)
			updatedComment['timestamp'] =event.target.value
			this.setState({
				comment:updatedComment
			})
	}
	render(){
		const commentList = this.state.list.map((comment,i)=>{
			return(
				<li key={i}><Comment currentComment={comment} /></li>
				)
		})

		return(
			<div>
				<h1>Comments: Zone1</h1>
				<div style={styles.comment.commentsBox}>
					<ul style={styles.comment.commentList}>
						{commentList}
					</ul>
					<input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username"/><br/>
					<input onChange={this.updateBody.bind(this)}  className="form-control"  type="text" placeholder="Comment"/><br/>
					<input onChange={this.updatetimeStamp.bind(this)}  className="form-control"  type="text" placeholder="timeStamp"/><br/>
					<button onClick={this.submitComment.bind(this)} className="btn btn-info" >Submit Comment</button>
				</div>
			</div>
			)
	}
}
export default Comments