import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myhtml: '<h1>ss<h1/>'
    }

    render() {
        return (
            <div>
                {this.state.myhtml}
                <div dangerouslySetInnerHTML={
                    {
                        __html:this.state.myhtml
                    }
                }>
                </div>
            </div>
        )
    }
}
