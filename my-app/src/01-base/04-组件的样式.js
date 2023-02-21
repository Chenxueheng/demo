import React, { Component } from 'react'
import './css/01-index.css'   // 导入css模块，webpack的支持

export default class App extends Component {
    render() {
        var myname = "chenxueheng"
        var obj = {background: 'red'}
        return (
            <div>04-组件的样式{1 + 1}-{myname}
            <div style={obj}>test</div>

            <div className="active">test</div>
            <div id="MyActive">test</div>

            <label htmlFor='userName'>用户名：</label>
            <input type={Text} id='userName' />
            </div>
        )
    }
}
