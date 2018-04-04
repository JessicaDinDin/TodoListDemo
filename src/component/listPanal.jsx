import React from 'react';


class ListPanal extends React.Component{
	constructor(props){
		super(props)

		this.state={
			text:'',
			list:''
		}	
	}

	componentDidMount(){
		
		const list = this.props.todoList.items
		this.state.list = list
		console.log("11",this.state.list)	
	}

	// componentWillUpdate(){
		
	// 	const list = this.props.todoList.items
	// 	this.state.list = list
	// 	console.log("33",this.state.list)
		
	// }

	// shouldComponentUpdate(){
		
		
		
	// 	console.log("33",this.state.list)
		
	// }

	componentDidUpdate(newItems){
		const list = this.props.todoList.items
		this.state.list = list
		// this.setState({
		// 	list:this.props.todoList.items
		// })
		// if(newItems){
		// 	this.state.list = newItems
		// 	this.setState({list:newItems})
		// }

		console.log("22",this.state.list)
	}


	remover(index){
		console.log("該分類的任務INDEX",index)
		this.props.removeTask(index)
	}

	save(taskIndex){
		this.state.list[taskIndex].isEdit=false
		this.props.saveTask(this.state.list)
	}

	editorTask(index){
		this.props.isEditorTask(index)
	}

	toggleClass(index){
		console.log("toogle:index",index)
		this.props.toggleClass(index)
	}

	textChange(e,index){
		let inputName = e.target.name;
		let inputValue= e.target.value;

		this.state.list[index].todo = inputValue
		this.setState({
			list:this.state.list
		})
	}

	filterTask(type){
		console.log("type",type)


		if(type=='all'){
			
			this.setState({list:this.props.todoList.items})
		}

		if(type=='finshed'){

			let newItems = this.props.todoList.items.filter(function(item, index){
		  		return item.isDone==true;       
			});
			console.log("newItems",newItems)

			this.componentDidUpdate(newItems)
		}
	}


	render(){	
		
		const list = this.props.todoList.items
		const catelogName = this.props.todoList.catelog


		console.log("該分類的任務",this.props.todoList)
		console.log("該分類的任務list",list)

		return (	
			<div className="list-group list-panal">
				{/*<div className="tag">分類 : {catelogName}
					<div className="progressBtn">
						<a  href="#" 
							className="taskProgress"
							onClick={()=>this.props.filterTask('all')}>全部</a>
						<a 	href="#" 
							className="taskProgress" 
							onClick={()=>this.props.filterTask('finshed')}>完成</a>

						<a href="#" className="taskProgress">未完成</a>
					</div>
					
				</div>*/}
				
				<ul className="liWrapper">
				{
					list.map((v,index)=>{	
						return(
							<li href="#" className="list-group-item" key={index}>
							<div className="row col-md-12" >
								<input type="checkbox"
									   className="col-md-1"
									   onChange={()=>this.toggleClass(index)}
									   checked={v.isDone==true?true:false}
								/>

								{
						    		v.isEdit?(
						    			<span>
							    			<input 
							    				className="col-md-8" 
							    				type="input"
							    				name="text"
							    				placeholder={v.todo}
										   		onChange={(e)=>this.textChange(e,index)}
											/>
											<span 
										    	className="editor"
										    	onClick={()=>this.save(index)}>
										    	<i className="fas fa-save"></i>
										    </span>
										</span>	
									)
						    		:(
						    			<span>
							    			<span className={v.isDone==true?'deleteItem':null}>
											    {v.todo}
											</span>
											<a href="#" 
										    	className="editor"
										    	onClick={()=>this.editorTask(index)}
										    	>
										    	<i className="fas fa-pencil-alt"></i>
										    </a>
									    </span>
						    		)
						    	}
				  

							   <span 
							    	className="editor"
							    	onClick={()=>this.remover(index)}>
							    	<i className="fas fa-trash-alt"></i>
							    </span>

							    {/*
								<a href="#" className="editor">
									<i className="fas fa-star"></i>
								</a>
								*/}
							</div>
							</li>
						)
					})
				}
				</ul>
			</div>	
		)
	}
}


export default ListPanal
