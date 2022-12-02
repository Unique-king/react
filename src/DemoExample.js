import React from 'react'

class DemoExample extends React.Component{
	state={
		s:this.props.price
	}
	render(){
		return(
			<div>
			this is demo component
			<p>{this.state.s}</p>
			</div>
			)
	}
}
export default DemoExample