import React, {Component} from 'react'

export default class Astro extends Component {

  state = {
    name: this.props.name,
    craft: this.props.craft
  }

  render(){
    return(
      <li>{this.state.name}, {this.state.craft}</li>
    )
  }

}