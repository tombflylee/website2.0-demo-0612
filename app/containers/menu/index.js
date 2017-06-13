import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { selectMainMenu } from '../../selectors/ui'
import { selectMenuState } from '../../selectors/application'
import { closeMenu } from '../../actions/index'

const OPEN_VAL = 1
const CLOSE_VAL = 0

export class Menu extends Component {
	static propTypes = {
		className:PropTypes.string,
		// mapStateToProps
		windowW:PropTypes.number,
		windowH:PropTypes.number,
		menuItems:PropTypes.array,
		isOpen: PropTypes.bool.isRequired, // menu总菜单是否打开
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

    state = {// 组件内部的state，与store中的state不一样
        isFullyOpen: false,
        anItemIsHovered: false,
    }

    el = null// 放置总nav的ref
    items = []// 放置所有menuItem的ref

    componentDidMount(){// 真实的dom被渲染出来后调用
        this.animate(this.props.isOpen? OPEN_VAL : CLOSE_VAL)
        document.addEventListener('keyup', this.handleKeyUp);// 监听esc退出键
    }

    animate = (val) =>{
        this.fadePanel(val);
        this.slideItems(val);
    }

    fadePanel = (val) =>{
        if(this.props.isOpen){
            const opacity = 1;
            this.el.style.opacity = opacity;// 因为this.el存nav的ref属性，ref即为nav实例
        }else{
            const opacity = 0;
            this.el.style.opacity = opacity;
        }

        if(val === CLOSE_VAL){
            this.el.style.display = 'none';
            this.setState({isFullyOpen:false});
        }else if(val === OPEN_VAL){
            this.setState({isFullyOpen:true});
        }else{
            this.el.style.display = 'flex';
        }
    }

    slideItems = (val) =>{
        const { windowW, windowH } = this.props;
        const groupLength = 1;
        let groupIndex = 0;

        this.items.forEach((ele,i)=>{
            if(i%groupLength===0){
                groupIndex += 1;
            }
        })
    }

    handleKeyUp = (e) =>{
        const Esc = 27
        if(e.keyCode === Esc){
            this.props.closeMenu();
        }
    }

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
		// isOpen: selectMenuState(state),
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		closeMenu: () => dispatch(closeMenu()),
	}
}

export default connect (mapStateToProps,mapDispatchToProps)(Menu)
