import React, { Component } from 'react';
import {connect} from 'react-redux'

class Band extends Component {
  deleteHandler = () => {
    this.props.deleteBand(this.props.name)
  }
  render() {
    return(
      <li>
        {this.props.name}
        <br></br>
        <button onClick={this.deleteHandler}>Delete</button>
      </li>
    );
  }
};

const mdp = dispatch => {
  return {
    deleteBand: name => dispatch({type: "DELETE_BAND", name})
  }
}

export default connect(null, mdp)(Band);
