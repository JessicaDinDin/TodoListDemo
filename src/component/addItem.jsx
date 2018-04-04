import React from 'react';

class AddItem extends React.Component{
	constructor(props){
		super(props)
		this.state={
			todoItem:''
		}
	}

	// 輸入代辦事項
	onAddTodo(e){
		console.log(e.target.value)

		this.setState({
			todoItem:e.target.value
		})
	}

	// 增加代辦事項
	onSubmit(){
		this.props.addTodoItem(this.state.todoItem);
	}

	render(){	

		return (
			<div>
				<input type ='text' onChange={(e)=>this.onAddTodo(e)}/>
				<button type='submit' onClick={()=>this.onSubmit()}>增加 </button>
				<button type="button" class="btn btn-primary">Primary</button>
			</div>
		)
	}
}


export default AddItem