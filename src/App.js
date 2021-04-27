import  React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div>
        Hello Gruda
        {/* jsx语法 三元运算符 */}
        <ul>
          <li>{false ? 'baidu' : 'gruda'}</li>
        </ul>
      </div>
    )
  }
}

export default App;
