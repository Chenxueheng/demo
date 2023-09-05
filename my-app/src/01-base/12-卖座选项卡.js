import React, { Component } from 'react'
import './css/02-maizou.css'
import Film from './maizuocomponent/Film'
import Center from './maizuocomponent/Center'
import Clinema from './maizuocomponent/Clinema'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影"
      },
      {
        id: 2,
        text: "影院"
      },
      {
        id: 3,
        text: "我的"
      },
    ],
    current: 0
  }

  which() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>
      case 1:
        return <Clinema></Clinema>
      case 2:
        return <Center></Center>
      default:
        return null
    }

  }

  render() {
    return (
      <div>
        {/* {
          this.state.current === 0 && <Film></Film>
        }
        {
          this.state.current === 1 && <Clinema></Clinema>
        }
        {
          this.state.current === 2 && <Center></Center>
        } */}

        { this.which()}
        
        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={item.id} className={this.state.current === index ? 'active' : ''}
                onClick={() => this.handleClick(index)}>{item.text}
              </li>
            )
          }
        </ul>
      </div>
    )
  }

  handleClick(index) {
    this.setState({
      current: index
    })
  }
}
