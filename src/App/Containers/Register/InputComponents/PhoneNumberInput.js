import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

import { useState } from 'react';
import { isValidNumber } from 'libphonenumber-js/';

import './phone_number_input.scss';

export default class PhoneNumberInput extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      message: 'This field requires.',
      color: '#BDBDBD'
    }
  }

  onChange = phone => {
    this.setState({ phone: phone })
    // setPhone(phone);
  }

  onBlur = (e) => {
    if (isValidNumber(e.target.value)) {
      this.setState({ message: 'Phone number verification' })
      this.setState({ color: '#219653' })
      this.props.isValid(true);
    } else {
      this.setState({ message: 'Invalid phone number' })
      this.setState({ color: 'red' })
    }
  }

  componentDidMount() {
    var a = document.getElementsByClassName('flag-dropdown');
    a[0].setAttribute('tabindex', '-1');
  }


  render() {
    return (
      <div className="phone-number-input" >
        <div>
          <PhoneInput
            className="phone-number-input"
            country={'fr'}
            value={this.state.phone}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </div>
        <p className="phone-number-input-label" style={{ color: this.state.color }}>{this.state.message}</p>
      </div>
    );
  }
}