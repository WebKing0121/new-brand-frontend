import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { Spring, animated } from 'react-spring/renderprops';

import { useState } from 'react';
import { isValidNumber } from 'libphonenumber-js/';

import './PhoneNumberInput.scss';

export default class PhoneNumberInput extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      message: 'This field requires.',
      color: '#BDBDBD',
      lineEnable: false
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

    this.setState({ lineEnable: false });
  }

  onFocus = () => {
    this.setState({ lineEnable: true });
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
            country={'fr'}
            value={this.state.phone}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
          />
          <Spring native to={{ width: this.state.lineEnable ? '310px' : '0px', margin: '0 auto' }} config={{ duration: 150 }}>
            {(props) => (
              <animated.div className="line" style={props}>
              </animated.div>
            )
            }
          </Spring>
        </div>
        <p className="phone-number-input-label" style={{ color: this.state.color }}>{this.state.message}</p>
      </div>
    );
  }
}