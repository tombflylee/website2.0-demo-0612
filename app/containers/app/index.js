import React ,{ Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { selectDataReady,
	selectUnderMaintenance } from '../../selectors/application'

export class AppComponent extends Component{
	static propTypes ={
		children: PropTypes.node,// 子组件
		windowW: PropTypes.number,
		windowH: PropTypes.number,
		dataReady: PropTypes.bool,
        language: PropTypes.string,
        fetchState: PropTypes.bool,
        path: PropTypes.string,
        footerItems: PropTypes.object,
        clientReady: PropTypes.bool,
        menuOpen: PropTypes.bool,
        underMaintenance: PropTypes.bool,// 系统在维护中 
	}
}

const mapStateToProps =  (state) =>{
	// 先检查是否在维护中
	const underMaintenance = selectUnderMaintenance(state);
	let props ={ underMaintenance };

	if(!underMaintenance){
		props = Object.assign({}, props, {
			windowW: state.browser.width,
			windowH: state.browser.height,

		})
	}
}