import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

import { useState } from 'react';
import { isValidNumber } from 'libphonenumber-js/';

import './phone_number_input.scss';

export default function PhoneNumberInput(props) {
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState('This field requires.');
  const [color, setColor] = useState('#BDBDBD');

  const onChange = phone => {
    setPhone(phone);
  }

  const onBlur = (e) => {
    if (isValidNumber(e.target.value)) {
      setMessage('Phone number verification');
      setColor('#219653')
      props.isValid(true);
    } else {
      setMessage('Invalid phone number');
      setColor('red');
    }
  }

  return (
    <div className="phone-number-input">
      <div>
        <PhoneInput
          className="phone-number-input"
          country={'fr'}
          value={phone}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <p className="phone-number-input-label" style={{ color: color }}>{message}</p>
    </div>
  )
}