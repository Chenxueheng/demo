import React, { Component } from 'react'

export default class App extends Component {
    // state = {
    //     flg: true,
    //     text: '收藏'
    // }

    constructor() {
        super()
        this.state = {
            flg: true,
            myName: "true"
        }
    }


    render() {

        return (
            <div>
                <h1>欢迎来到react开发 +++++++{this.state.myName}</h1>
                <button onClick={() => {
                    // if (this.state.flg) {
                    //     this.setState({
                    //         flg: false,
                    //         text: "收藏"
                    //     })
                    // } else {
                    //     this.setState({
                    //         flg: true,
                    //         text: "取消收藏"
                    //     })
                    // }
                    if(this.state.flg){
                        this.setState({
                            myName: 'true'
                        })
                    }else{
                        this.setState({
                            myName: 'flase'
                        })
                    }
                    
                    this.setState({
                        flg: !this.state.flg
                    })

                }}>{this.state.flg ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }
}
