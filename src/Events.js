 import {Component} from 'react'

class Events extends Component{
	state={
		username:"",
		instagram:""
	}
	handleClick=()=>{
		console.log(this.state.username)
		console.log(this.state.instagram)


	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		return(
			<div>
				<input
				name="username"
					onChange={this.handleChange}
					placeholder="Enter username"/>
					<input
					name="instagram"
					placeholder="Instagram id"
					onChange={this.handleChange}/>
					<button onClick={this.handleClick}>Submit</button>
			</div>
			)
	}
}

export default Events