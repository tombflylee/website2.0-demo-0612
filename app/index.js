import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Menu from './containers/menu/index'

import {ui} from './reducers/ui'
let store = createStore(ui)

render(
	<Provider store={store}>
		<Menu />
	</Provider>,document.getElementById("app")
)