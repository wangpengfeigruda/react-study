// 根组件
import  React, { Component, Fragment } from 'react'

import Boss from './components/Boss'
class App extends Component {
  render () {
    return (
      <Fragment>
        {/* <Todolist /> */}
        <Boss />
      </Fragment>
    )
  }
}

export default App;
