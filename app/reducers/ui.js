import { fromJS } from 'immutable'
import { FETCH_UI,RECEIVE_UI } from '../actions/ui'
import { UI_INITIAL_STATE } from '../constants/initial-state'

const initialState = fromJS(UI_INITIAL_STATE)
export const ui = (state = initialState,action) =>{
	switch(action.type){
		case FETCH_UI:
			return state.withMutations((state)=>{
				state.set('fetching',true)
			})
		case RECEIVE_UI:
			return state.withMutations((state) => {
				state.set('fetching',false);
				state.set('mainMenuItems',fromJs(action.ui.mainMenuItems));
			})
		default:
			return state
	}
}