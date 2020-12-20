import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
  renderBands = () => {
    if (this.props.bands){
      return this.props.bands.map(band => <Band {...band}/>)
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderBands()}
        </ul>

      </div>
    )
  }
}

export default Bands;
