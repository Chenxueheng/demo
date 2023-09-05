import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {

  myRef = React.createRef()
  state = {
    list: ['aa', 'bb', 'cc']
  }

  render() {
    return (
      <div>
        <h1>10-toDoList</h1>
        <input ref={this.myRef} />
        <button onClick={this.handleClick2}>add2</button>
        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={index}>
                {/* {item} */}
                {/* {item.mytext} */}
                <span dangerouslySetInnerHTML={
                  {
                    __html:item
                  }
                }></span>

                {/* <button onClick={this.handleDelClick.bind(this, index)}>del</button> */}

                <button onClick={() => { this.handleDelClick(index) }}>del</button>
              </li>)
          }
        </ul>
        {this.state.list.length === 0 ? <div>暂无代办事项</div> : null}
        {/* 前面为真的话，后面就执行。 */}
        {this.state.list.length === 0 && <div>暂无代办事项</div>}
        {/* <div>
            暂无代办事项
          </div> */}

        <div className={this.state.list.length===0 ? '':'hidden'}>暂无代办事项</div>
      </div >
    )
  }

  handleClick2 = () => {
    console.log('click2', this.myRef.current.value)
    // 最好不要修改原状态值
    // this.state.list.push(this.myRef.current.value)
    let newList = [...this.state.list]
    newList.push(this.myRef.current.value)
    console.log(newList)
    this.setState({
      list: newList
    })
    console.log(this.state.list)
    // 清空输入框
    this.myRef.current.value = ''
  }

  handleClick3 = () => {
    console.log(this.state.list)
  }

  handleDelClick = (index) => {
    console.log('进行删除' + index)
    // concat()
    let newList = this.state.list.slice()
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }
}
