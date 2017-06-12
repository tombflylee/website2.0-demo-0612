import { TODO } from '../constants/index'

// Action Creator
const addTodo = (content) => ({
	type: TODO.ADD_TODO,
	payload: {
		id: setTimeout(()=>{}),
		content,
		completed: false,
		createAt: Date.now()
	}
})
const delTodo =(todoId) => ({
	type: TODO.DEL_TODO,
	payload: id 
})
const toggleTodo =(todoId) => ({
	type: TODO.TOGGLE_TODO,
	payload: todoId 
})

export default{
	addTodo, toggleTodo, delTodo
}

