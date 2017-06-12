// 展示组件：展示整个todo,合成了TodoInput
import React, { Component } from 'react'
import TodoInput from './TodoInput'
import timerformater from '../../utils/timerformater'

// props:todos(要展示的内容),delTodo(删除函数),addTodo(添加函数),toggleTodo(切换函数)
export default class Todo extends Component{
	constructor(){
		super(props);
	}
	delTodo(id){
		if(!confirm('确认删除？')) return 
		this.props.delTodo(id)
	}
	render(){
		let { todos, addTodo, toggleTodo } = 
		return (
			<div>
				<ul>
					{todos.map( todo => 
						<li key={todo.id} onClick={() => toggleTodo(todo.id)}>
							<span style={{textDecoration: todo.completed ? 'line-through': 'none'}}>
							{todo.content}
							</span>
							<a href="javascript:;"
								style={{textDecoration:'none'}}
								className='pull-right'
								onClick={()=>this.delTodo(todo.id)}>
                				&otimes;
							</a>
							<span className="label label-default pull-right">
								{ timerformater(todo.createdAt)}
							</span>
						</li>
					)}
				</ul>
				<TodoInput addTodo={addTodo}/>
			</div>
		)
	}
}