import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './About.css';

class About extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    console.log("Home Mounted");
  }
  componentWillUnmount() {
    console.log("Home is unmounting");
  }

  render() {
    return (
      <div className={"home"}>
        Welcome to About
      </div>
    )
  }
}

const mapState = (state = {}) => {
  return { ...state };
};

const mapDispatch = (dispatch) => {
  return {
  }
};

export default withRouter(connect(mapState, mapDispatch)(About))

