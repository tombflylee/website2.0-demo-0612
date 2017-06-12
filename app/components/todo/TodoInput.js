// 展示组件： todo组件中进行输入用的
import React, { Component } from 'react'

// props:addTodo
export default class TodoInput extends Component{
	constructor(props){
		super(props);
		// 有这个state是因为表单的值必须要获取到：
		// 1.此时DOM只是虚拟DOM，可以用react的findDOMNode找到再获取值
		// 2.自己写setState函数。
		// 2.或者使用redux-form。（后期加）
		this.state = { todoInput: '' } 
		this.handleChange = handleChange.bind(this)
	}
	// handleChange函数是个工具类函数，应该放在util下。
	handleChange(e){
		this.setState({ todoInput:e.target.value.trim() })
	}
	handleSubmit(){
		let content = this.this.state.todoInput.trim()
		if(!content) return

		// 展示组件只调用上层组件传递的addTodo函数进行操作。 
		this.props.addTodo(content)
		this.setState({ todoInput: '' })
	}
	render(){
		return (
			<form onSubmit={
				(e)=>{
					e.preventDefault()
					this.handleSubmit()
				}
			}>
				<div className="form-group">
					<input 
						type="text" 
						className="form-control"
						name="todo-input"
						placeholder="请输入待办事项，敲回车确认添加"
						required 
						value={this.state.todoInput}
						onChange={this.handleChange}/>
				</div>
			</form>
		)
	}
}