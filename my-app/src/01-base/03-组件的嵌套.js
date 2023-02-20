import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>Child</div>
    }
}

class Navbar extends Component {
    render() {
        return <div>Navbar
            <Child></Child>
        </div>
    }
}

function Swiper() {
    return <div>Swiper</div>
}

// function Tabbar(){
//     return <div>Tabbar</div>
// }
/* const Tabbar = () => {
    return <div>Tabbar</div>
} */

const Tabbar = () => <div>Tabbar</div>


export default class App extends Component {
    render() {
        return (
            <div>
                03-组件的嵌套
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
