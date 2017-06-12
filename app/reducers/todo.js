import initState from '../store/initState'
import { ADD_TODO, DEL_TODO, TOGGLE_TODO } from '../actions/todo'
export default function todos (state=initState.todos,action){
	switch(action.type){
		case ADD_TODO: 
			return [...state, action.payload]
		case TOGGLE_TODO:
			return state.map(
				todo => 
				(todo.id === action.payload.id) ? {...todo, completed: !todo.completed} : todo 
			)
		case DEL_TODO:
			return state.filter(
				todo =>{
					todo.id !== action.payload.id
				}
			)
		default:
			return state
	}
}
// 这里操作数组用到map和filter，因为要返回一个新的state。
// 这两个function都可以返回新的数组。