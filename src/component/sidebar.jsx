import React from 'react';
// components
import AddCatelog from './addCatelog.jsx'

class SideBar extends React.Component{
	constructor(props){
		super(props)
	}

	// 點擊分類
	clickCatelog(index){
		console.log("e",index);
		this.props.clickCatelog(index);
		
	}

	add(text){
		console.log("text",text)
		this.props.addCatelog(text)
	}


	render(){	
		console.log("this.props.catelogData",this.props.catelogData)

		let catelogList = this.props.catelogData.length==0
		?'目前無新增分類'
		:this.props.catelogData.map((v,index)=>(
    		<a onClick={(e)=>this.clickCatelog(index)} key={v.catelog} href="#" className="list-group-item ">
		  		<span className="badge">{v.items.length}</span>
		    	<p className="list-group-item-text">
		    		<i className="fas fa-briefcase"></i>
		    		{v.catelog}
		    	</p>
	 		</a>
    	))
		return (
			<div className="col-md-3 col-md-offset-2 side-bar">
				<div>
				    <h4>增加分類</h4>
			    	<AddCatelog addCatelog={(text)=>this.add(text)}/>
				    <div className="list-group classify">
				    	{catelogList}
					</div>
				</div>
			</div>	
		)
	}
}


export default SideBar


				