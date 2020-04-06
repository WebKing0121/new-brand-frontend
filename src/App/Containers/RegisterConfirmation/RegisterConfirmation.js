import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './RegisterConfirmation.css';

class RegisterConfirmation extends Component {
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
      <div className={"regconfirm"}>        
        <div className="regconfirm_description">
          <p>
            Nous avons bien reçus votre demande, vous recevrez un email dans quelques instants afin de finalisé votre inscription.
          </p>
        </div>
        <div className="regconfirm_auth">
          <span className="regconfirm_auth_line" />
          <span className="regconfirm_auth_name">
            L’équipe New/Brands.
          </span>
        </div>
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

export default withRouter(connect(mapState, mapDispatch)(RegisterConfirmation))
