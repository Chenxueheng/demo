import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: [{
            id: 11,
            text: '111'
        }, {
            id: 12,
            text: '222'
        }, {
            id: 13,
            text: '333'
        }]
    }

    render() {
        var List = this.state.list.map((item, index) => <li key={index}>{item.text} +{index}</li>)
        return (


            <div>
                <h1>09-循环渲染</h1>
                <ul>
                    {
                        this.state.list.map(item =>
                            <li key={item.id}>{item.text} + {item.id}</li>)
                    }
                </ul>

                <ul>
                    {List}
                </ul>

            </div>
        )
    }
}



// 原生js - map

// var list = ['aa', 'bb', 'cc']

// var newlist = list.map(item => '<li>${item}</li>')

// console.log(newlist.join(''))