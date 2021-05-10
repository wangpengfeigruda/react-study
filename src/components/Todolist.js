/* JSX语法中需要注意的几个小坑
    1. jsx代码注释  
    2. class需写成className
    3.label for需写成label htmlfor
*/
/*
    函数式编程的好处是什么？
    1.函数式编程让我们的代码更清晰，每个功能都是一个函数。
    2.函数式编程为我们的代码测试代理了极大的方便，更容易实现前端自动化测试。
*/
import React, { Component, Fragment } from 'react'
import Todoitem from './Todoitem'
import Boss from './Boss'
import axios from 'axios'

class Todolist extends Component {
    // Fragment解决外层必须包裹原则
    // react通过数据进行驱动
    constructor(props){
        super(props); // 调用父类构造函数，固定写法
        this.state = {
            inputVal: '事项三',
            list: ['事项一', '事项二'] // 服务list
        }
    }
    UNSAFE_componentWillMount(){
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }
    render(){
        console.log('3.render---组件挂载中.......')
        return (
            <Fragment>
                <div>
                    {/* 单行注释 */}
                    <input value={this.state.inputVal} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加事项</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item, index) => {
                            // 缺少key值,必须添加key
                            // return <li key={index + index} onClick={this.deleteItem.bind(this, index)}>
                            //             {item}
                            //         </li>
                            // 父组件向子组件传递内容，靠属性的形式传递。
                            // 子组件调用父组件方法，把方法传递给子组件
                            // 单项数据流：只能使用数据，不能修改数据
                            return (
                                <Todoitem content={item} key={index+item} index={index} deleteItem={this.deleteItem.bind(this)} avname="gruda"/>
                            )
                            
                        })
                    }
                </ul>
                <Boss />
            </Fragment>
        )
    }
    componentDidMount(){
        console.log('componentDidMount----组件挂载完成的时刻执行')
    }
    shouldComponentUpdate(){
        console.log('1.shouldComponentUpdate----组件发生改变前执行')
        return true
    }
    UNSAFE_componentWillUpdate(){
        console.log('2.componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }
    componentDidUpdate(){
        console.log('4.componentDidUpdate----组件更新之后执行')
    }
    // this指向不对，你需要重新用bind设置一下指向(ES6的语法)。
    // React中改变值需要使用this.setState方法。
    // ref 代替 e.target (数据驱动会出现各种问题)
    /* ref使用中的坑
        setState方法提供了一个回调函数，也就是它的第二个函数
    */
   /*React 生命周期，四大阶段
    1、Initialization：初始化阶段
    2、Mounting：挂载阶段
    componentWillMount：组件即将被挂载到页面时刻执行
    render：页面的state和props发生变化时执行
    componentDidMount：组件挂载完成时执行
    3、Updation：更新阶段
    有两个基本部分组成，一个是props属性改变，一个是state状态改变
    shouldComponentUpdate 组件更新之前，自动被执行
    componentWillUpdate 组件更新之前，但是shouldComponentUpdate之后被执行
    componentDidUpdate 组件更新之后执行
    4、Unmounting： 销毁阶段
    componentWillUnmount 组件去除时执行
    
    生命周期函数指在某一个时刻组件会自动调用执行的函数；
    注意：componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化就会执行
   */
    inputChange(e){
        this.setState({ // 改变值
            inputVal: e.target.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list, this.state.inputVal]
        },() => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }
    deleteItem(index){
        // 记住React是禁止直接操作state
        let list = this.state.list;
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Todolist