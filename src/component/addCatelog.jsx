import React from 'react';

class AddCatelog extends React.Component{
	constructor(props){
		super(props)
		this.state={
			text:''
		}
	}


	// 綁定分類輸入
	textInput(e){	
		let inputName = e.target.name;
		let inputValue= e.target.value;
		console.log("inputValue",inputValue)
		this.setState({
			[inputName]:inputValue
		})


		// console.log(key)
		// this.setState({
		// 	[key]:val
		// })
		
	}

	// 點擊增加分類
	addCatalog(e){
		
		this.props.addCatelog(this.state.text)
		this.setState({text:''})
		
	}
	render(){	
		
		return (
			<div className="input-group">
		      	<input type="text" 
		      		   className="form-control" 
		      		   name="text"
		      		   placeholder="add text"
		      		   value={this.state.text}
		      		   onChange={(e)=>this.textInput(e)}
		      	/>

		    	<span className="input-group-btn">
		        	<button 
		        		className="btn btn-info"
		        		onClick={(e)=>this.addCatalog(e)}
		        		>
		        		+分類
		        	</button>
		      	</span>
			</div>			
		)
	}
}

export default AddCatelog