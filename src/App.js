// create your App component here
import React, {Component} from 'react'
import Astro from './Astro.js'

export default class App extends Component {
  
  state = {
    astros: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(json => this.saveAstros(json.people))
  }

  saveAstros = (people) => {
    this.setState({astros: people.map(astro => <Astro name={astro.name} craft={astro.craft}/>)})
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.astros}
        </ul>
      </div>
    )
  }
}