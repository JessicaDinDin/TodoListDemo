import React from 'react';

class AddItemInput extends React.Component{
	constructor(props){
		super(props)
		this.state={
			text:''
		}
	}

	addTask(){
		let catelogIndex = this.props.catelogIndex
		this.props.addTaskItem(this.state.text,catelogIndex)
		this.setState({text:''})
	}

	onInputChange(e){

		let inputName = e.target.name;
		let inputValue= e.target.value;

		this.setState({
			[inputName]:inputValue
		})	
	}

	render(){	
			
		return (
			<div className="input-group">
		      	<input type="text" 
		      		   className="form-control" 
		      		   name="text"
		      		   value={this.state.text}
		      		   onChange ={(e)=>this.onInputChange(e)}
		      	/>

		    	<span className="input-group-btn">
		        	<button 
		        		className="btn btn-info"
		        		onClick={()=>this.addTask()}>
		        		+任務
		        	</button>
		      	</span>
			</div>			
		)
	}
}

export default AddItemInput