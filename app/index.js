import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { responsiveStoreEnhancer } from 'redux-responsive'


import Menu from './containers/menu/index'
import { configureStore } from './store/configureStore'
import rootReducer from './reducers/index'

const store = createStore(rootReducer, responsiveStoreEnhancer)

render(
	<Provider store={store}>
		<Menu />
	</Provider>,document.getElementById("app")
)

