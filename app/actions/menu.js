export const CLOSE_MENU = 'CLOSE_MENU'
export const TOGGLE_MENU = 'TOGGLE_MENU'

export closeMenu = () => {
	return {
		type:CLOSE_MENU
	}
}

export toggleMenu = () => {
	return{
		type: TOGGLE_MENU
	}
}