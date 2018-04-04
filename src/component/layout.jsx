import React from 'react';
import _ from 'lodash'

// components
import Header from './header.jsx'
import SideBar from './sideBar.jsx'
import AddItemInputeBar from './addItemInput.jsx'
import ListProgress from './listProgress.jsx'
import ListPanal from './listPanal.jsx'

// 假資料設定
const todo=[
	{
		catelog:'company',
		items:[
			{todo:"完成程式報告",isDone:true,isEdit:false},
			{todo:"大數據分析",isDone:false,isEdit:false},
		]
	},
	{
		catelog:'home',
		items:[
			{todo:"買咖哩牛肉",isDone:false,isEdit:false},
			{todo:"回家接小孩",isDone:false,isEdit:false},
			{todo:"掃地",isDone:false,isEdit:false},
		]
	},
	{
		catelog:'才藝班',
		items:[
			{todo:"教畫圖作頁",isDone:false,isEdit:false},	
		]
	}
]


	

class Layout extends React.Component{
	constructor(props){
		super(props)
		this.state={
			todo:todo,
			catelogIndex:0,
			filter:todo[0],
			obj2: _.cloneDeep(todo)
		}

	}

	// componentDidMount(){
	// 	obj2 = _.cloneDeep(this.state.todo);
	// 	console.log("**componentDidMount",obj2)	
	// }

	// 點擊分類
	clickCatelog(index){
		console.log("分類的index",index)
		this.setState({
			catelogIndex:index
		})
		
	}

	// 增加分類
	addCatelog(catelog){
		console.log("老爸層",catelog)
		let obj={
			catelog:catelog,
			items:[],
		}

		this.state.todo.push(obj)
		this.setState({todo:this.state.todo})	
	}

	// 增加TODO清單
	addTaskItem(text,catelogIndex){
		let obj = {todo:text,isDone:false,isEdit:false}
		this.state.todo[catelogIndex].items.push(obj)
		this.setState({todo:this.state.todo})
	}

	// 刪除任務
	removeTask(taskIndex){
		
		console.log("分類index",this.state.catelogIndex)
		console.log("任務index",taskIndex)

		this.state.todo[this.state.catelogIndex].items.splice(taskIndex, 1)
		this.setState({
			todo:todo
		})

	}

	// 是否做完
	toggleClass(index){
		console.log("qqindex",index)
		
		this.state.todo[this.state.catelogIndex].items[index].isDone = !this.state.todo[this.state.catelogIndex].items[index].isDone
		this.setState({
			todo:this.state.todo
		})
	}

	// 是否編輯
	isEditorTask(taskIndex){
		console.log("taskIndex",taskIndex)
		this.state.todo[this.state.catelogIndex].items[taskIndex].isEdit=true
		this.setState({
			todo:todo
		})
	}

	//保存修改任務
	saveTask(list){
		let catelogIndex = this.state.catelogIndex
		this.state.todo[catelogIndex].items= list
		this.setState({todo:this.state.todo})	
	}

	
	finshed(){
		// let catelogIndex = this.state.catelogIndex
		// let items = this.state.todo[catelogIndex].items
		// let newItems = items.filter(function(item, index){
		//   	return item.isDone==true;       
		// });

		// this.state.todo[catelogIndex].items = newItems
		// this.setState({
		// 	todo:todo
		// })
	}

	filterTask(type){

		console.log("type",type)

		let catelogIndex = this.state.catelogIndex
		let task = this.state.todo[catelogIndex].items

	

		if(type=='all'){

			console.log("**this.state.obj2**",this.state.obj2[0])

			this.setState({
				filter:this.state.obj2[catelogIndex]
			})
		}

		if(type=='finshed'){

			let newItems = task.filter(function(item, index){
		  		return item.isDone==true;       
			});

			this.state.filter.items=newItems
			this.setState({
				filter:this.state.filter
			})
		}

			// console.log("***111",this.state.todo)
			// console.log("***222",this.state.filter)
			// console.log("***todo***",saveTodo)
		
	}


	render(){


		

		
		return (
			<div>
				<Header/>
				<div className="wapper">
					<div className="container">
						<div className="row">
							<SideBar
								addCatelog={(catelog)=>this.addCatelog(catelog)}
								catelogData={this.state.todo}
								clickCatelog={(index)=>this.clickCatelog(index)}
								/>
							<div className="col-md-6 context">
								{/*
								<ListProgress/>
								*/}
								<div className="line"></div>
								<h4>我要做的事?</h4>
								<AddItemInputeBar 
									catelogIndex={this.state.catelogIndex}
									addTaskItem={(text,catelogIndex)=>this.addTaskItem(text,catelogIndex)}
								/>

							

								<ListPanal 
									removeTask={(index)=>this.removeTask(index)}
									todoList={this.state.todo[this.state.catelogIndex]}
									toggleClass={(index)=>this.toggleClass(index)}
									isEditorTask ={(index)=>this.isEditorTask(index)}
									saveTask = {(list)=>this.saveTask(list)}
									filterTask = {(type)=>this.filterTask(type)}
									/>	
							</div>
						</div>
					</div>	
				</div>
			</div>
		)
	}
}


export default Layout