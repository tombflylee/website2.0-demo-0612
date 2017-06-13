import { combineReducers } from 'redux'
import { createResponsiveStateReducer } from 'redux-responsive';

import { ui } from './ui'

export default combineReducers({
	browser: createResponsiveStateReducer({
		mobile: 420,
        mobileLandscape: 740,
        tablet: 980,
        desktop: 1280,
        largeScreen: 1600,
	}),
	ui,
})