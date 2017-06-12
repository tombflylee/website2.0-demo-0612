import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { selectMainMenu } from '../../selectors/ui'
import { selectMenuState } from '../../selectors/application'
import { closeMenu } from '../../actions/menu'

export class Menu extends Component {
	static propTypes = {
		className:PropTypes.string,
		// mapStateToProps
		windowW:PropTypes.number,
		windowH:PropTypes.number,
		menuItems:PropTypes.array,
		isOpen: PropTypes.bool.isRequired, // menu菜单是否打开
		// mapDispatchToProps
		closeMenu: PropTypes.func.isRequired,
	};

	static defaultProps = {
        menuItems: [
            {
                label: 'Brand',
                title: 'Born digital',
                link: 'BRAND',
            },
        ],
        isOpen: false,
    };
    el = null// 放置总nav的ref
    items = []// 放置所有menuItem的ref

    handleMouseEnter = () => {
    	this.setState({ anItemIsHovered: true })
    }

    handleMouseLeave = () =>{
    	this.setState({anItemIsHovered: false})
    }

    render(){
    	const className = classNames('menu-main',this.props.className)
    	return (
    		<nav ref={(ref) => {this.el = ref}} // ref为nav实例,存入el中
    			className={className}>
    			<div className={classNames('menu-main__wrapper')}>
    				{this.props.menuItems.map((item,i) => {
    					<div key={i}
    						ref={(ref)=>{
    							this.items.splice(i,1,ref);// 会替换掉旧的
    						}}
    						className={classNames('menu-main__item')}
    						onMouseEnter={this.handleMouseEnter}
    						onMouseLeave={this.handleMouseLeave}
    					>
    						<Link to={item.link} className={classNames('menu-main__item-link')}>
    							<div className={classNames('menu-main__item-label-mask')}>
    								<h4 className={classNames('open','menu-main__item-label')}>
    									{item.label}
    								</h4>
    							</div>
    							<div className={classNames('menu-main__item-heading-mask')}>
    								<h3 className={classNames('open','menu-main__item-heading')}>
    									{item.title}
    								</h3>
    							</div>
    						</Link>
    					</div>
    				})}
    			</div>
    		</nav>
    	)
    };
}

const mapStateToProps = (state) =>{
	return{
		windowW: state.browser.width,
		windowH: state.browser.height,
		menuItems: selectMainMenu(state).toJS(),// 将immutableJS中的类型转换为object类型
		isOpen: selectMenuState(state),
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		closeMenu: () => dispatch(closeMenu()),
	}
}

export default connect (mapStateToProps,mapDispatchToProps)(Menu)
