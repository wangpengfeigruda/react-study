import React, { Component } from 'react'

class Home extends Component {
    constructor(props){
        super(props );
        // 定义数据
        this.state = {
            name: 'gruda',
            age: 20
        }
    }
    render () {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
            </div>

        )
    }
}

export default Home