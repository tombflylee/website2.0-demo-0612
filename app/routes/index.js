import React from 'react'
import { Route, IndexRoute, IndexRedirect, Redirect } from 'react-router'
import App from '../containers/app'
import BasePage from '../containers/base-page'
import { PATHS, PAGES, PAGES_CLASSES } from '../constants/index'

export default configureRoute =(store, setLanguage) =>{
	return(
		<Route path={PATHS.HOMEPAGE} component={App}>
			<IndexRoute pageID={PAGES.HOME}
				pageClass={PAGES_CLASSES.HOME}
			    component={BasePage}
			/>
		</Route>
	)
}