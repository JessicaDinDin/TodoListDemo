import React from 'react';

class Header extends React.Component{
	constructor(props){
		super(props)
	}

	render(){	
		return (
			
			<div className="header bg-dark">
				<div className="container">
					<div className="row">

						<i className="fas fa-file-word fa-3x"></i>
						<span className="title">React Todo List</span>
					</div>
				</div>
			</div>
			
		)
	}
}


export default Header