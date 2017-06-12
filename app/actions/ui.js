export const FETCH_UI = 'FETCH_UI'
export const RECEIVE_UI = 'RECEIVE_UI'

export const fetchUI = () =>({
	type: FETCH_UI,
})

export const receiveUI = (ui) =>({
	type: RECEIVE_UI,
	ui,
})