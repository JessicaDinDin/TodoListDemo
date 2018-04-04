import React from 'react';

class ItemList extends React.Component{
	constructor(props){
		super(props)
	}

	delete(index){
		console.log('--value--',index)
		this.props.deleteItem(index);
	}

	toggleClass(index){
		
		// let state = value.isfinshed==true?false:true;
		// console.log("state:",state);
		console.log("index",index)
		
		this.props.toggleFinshed(index);
	}


	render(){	
		return (
			<div>
				<ul>
					{
						this.props.list.map((value,index)=>{
							return (
								<li key={index}>
									<span className={value.isfinshed == true? 'finshed' :null}>{value.item}</span>
									<span className="remove"> 
										<input id="checkBox"
											   type="checkbox" 
											   onChange={(e)=>this.toggleClass(index)}/>
									</span>
									<span className="remove"> 
										<button type='submit' onClick={(e)=>this.delete(index)}>刪除 </button>
									</span>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}


export default ItemList