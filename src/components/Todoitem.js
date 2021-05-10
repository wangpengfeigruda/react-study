import React, { Component } from 'react';

import PropTypes from 'prop-types'

// this.props.xxx 子组件接收父组件的值
// PropTypes设置组件传值的数据类型，引入后在组件的最下方写代码（类外面）
// isRequired 必须传递
// 使用默认值defaultProps
class Todoitem extends Component {
    constructor(props){
        super(props);
        this.state = {}
        // 构造函数中绑定this 高效
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        console.log('child-render')
        return ( 
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
         );
    }
    // 完美解决了子组件的渲染性能问题
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
    UNSAFE_componentWillReceiveProps(){
        console.log('child - componentWillReceiveProps')
    }
    componentWillUnmount(){
        console.log('child - componentWillUnmount')
    }
}
Todoitem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
    avname:PropTypes.string.isRequired
}
 
export default Todoitem;