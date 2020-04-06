import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useState } from "react";

export default function TextValidator(props) {
  const [text, setText] = useState("");
  const [valid, setValid] = useState();
  const [message, setMessage] = useState("This field requires.");
  const [color, setColor] = useState("#BDBDBD");

  let regex = null;
  let match = null;

  const handleChange = event => {

    setText(event.target.value);
    if (props.handle) {
      props.handle(event);
    }
  };

  const handleBlur = (event) => {
    const txt = event.target.value;

    if (props.inputNum) {
      regex = /[0-9]+/g;
    } else {
      regex = /[a-zA-Z]+/g;
    }

    match = regex.test(txt);

    if (match) {
      setValid(false);
      setColor("#219653");
      setMessage(props.successMessage);
      if (props.isValid) {
        props.isValid(true);
      }
    } else {
      setValid(true);
      setColor("red");
      setMessage(props.errorMessage);
    }
    // console.log(event.target.value);
  }

  return (
    <FormControl style={props.formStyle}>
      <InputLabel htmlFor="my-input" style={{ color: color }}>
        {props.label}
      </InputLabel>
      <Input
        id="my-input"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-describedby="my-helper-text"
        style={props.inputStyle}
      />
      <FormHelperText
        error={valid}
        id="my-helper-text"
        style={{ textAlign: "right", color: color, fontSize: '11px' }}
      >
        {message}
      </FormHelperText>
    </FormControl>
  );
}
