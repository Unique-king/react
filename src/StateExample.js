import React from 'react'

class StateExample extends React.Component{
	state={
		name:"ReactJS",
		year:2013
	}
	render(){
		return(
			<div>
				<p>{this.state.name} {this.state.year}</p>
				{
					this.state.employees.map((emp)=>(
					<div> 
						<p>{emp.id}</p>
						<p>{emp.name}</p>

					</div>
					))
				}
			</div>
			)
	}
}
export default StateExample