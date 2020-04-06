import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function EmailValidator(props) {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState();
  const [message, setMessage] = useState("This field requires.");
  const [color, setColor] = useState("#BDBDBD");

  const handleChange = event => {
    const txt = event.target.value;
    const regex = /[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]{2,})*(\.[a-zA-Z0-9_-]{2,8})/g;
    const match = regex.test(txt);
    if (match) {
      setValid(false);
      setColor("#219653");
      setMessage(props.successMessage);
      props.isValid(true);
    } else {
      setValid(true);
      setColor("red");
      setMessage(props.errorMessage);
    }
    setEmail(event.target.value);
  };

  return (
    <FormControl style={props.formStyle, { marginBottom: '20px' }
    }>
      <InputLabel htmlFor="my-input" style={{ color: color }}>
        {props.label}
      </InputLabel>
      <Input
        id="my-input"
        value={email}
        onChange={handleChange}
        aria-describedby="my-helper-text"
        style={props.inputStyle}
      />
      <FormHelperText
        error={valid}
        id="my-helper-text"
        style={{ textAlign: "right", color: color, height: '15px', fontSize: '11px' }}
      >
        {message}
      </FormHelperText>
    </FormControl >
  );
}
