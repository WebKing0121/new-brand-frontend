import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

import { useState } from 'react';
import { parsePhoneNumberFromString, isValidNumber } from 'libphonenumber-js/';

export default function PhoneNumberInput(props) {
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState('This field requires.');
  const [valid, setValid] = useState();
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
    <div>
      <div>
        < PhoneInput
          style={{ width: "310px", paddingRight: "20px", color: color }}
          country={'fr'}
          value={phone}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <div style={{ width: '310px', textAlign: 'right', color: color }}>
        <label style={{ fontSize: '11px' }}>{message}</label>
      </div>
    </div>
  )
}