import React from 'react';

class ListProgress extends React.Component{
	constructor(props){
		super(props)
	}

	render(){	
		return (	
			<div className="listProgress-box">
				<div className="listProgress col-md-4">
					<i className="fas fa-list-alt fa-2x">
						<span>全部</span>
					</i>
					<span>123</span>
				</div>

				<div className="listProgress col-md-4">
					<i className="fas fa-calendar-check fa-2x">
						<span>已完成</span>
					</i>
					<span>123</span>
				</div>

				<div className="listProgress col-md-4">
					<i className="fas fa-stopwatch fa-2x">
						<span>未完成</span>
					</i>
					<span>123</span>
				</div>
			</div>
			
		)
	}
}


export default ListProgress

