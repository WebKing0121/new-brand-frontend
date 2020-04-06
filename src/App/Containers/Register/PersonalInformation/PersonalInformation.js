import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Spring, animated } from 'react-spring/renderprops';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import EmailValidator from "../InputComponents/EmailInput";
import TextValidator from "../InputComponents/TextInput";

export default function PersonalInformation(props) {
  const [name, setName] = React.useState("");

  const handleChange = event => {
    setName(event.target.value);
    // console.log('fullname', checkFullName, 'brandname', checkBrandName, 'country', checkCountry, 'email', checkEmail)
  };

  //check input valid
  // const [checkFullName, setCheckFullName] = useState(false);
  // const [checkBrandName, setCheckBrandName] = useState(false);
  // const [checkCountry, setCheckCountry] = useState(false);
  // const [checkEmail, setCheckEmail] = useState(false);
  // const [checkSelectButton, setCheckSelectButton] = useState(false);
  // const [valid, setValid] = useState();

  // const handleFullName = (isValid) => {
  //   setCheckFullName(isValid);
  //   // checkValid();
  // }
  // const handleBrandName = (isValid) => {
  //   setCheckBrandName(isValid);
  //   // checkValid();
  // }
  // const handleCountry = (isValid) => {
  //   setCheckCountry(isValid);
  //   // checkValid();
  // }
  // const handleEmail = (isValid) => {
  //   setCheckEmail(isValid);
  //   // checkValid();
  // }
  // const handleSelectButton = (isValid) => {
  //   setCheckSelectButton(isValid);
  //   // checkValid();
  // }
  const checkValid = () => {
    // const isValid = checkFullName && checkBrandName && checkCountry && checkEmail;
    // console.log('fullname', checkFullName, 'brandname', checkBrandName, 'country', checkCountry, 'email', checkEmail)
    // console.log('person', isValid);
    // props.isValid(isValid);

    // console.log(isValid);
  }

  const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        borderRadius: "50px",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "14px",
        textTransform: "none"
      }
    },

    rowSpace: {
      "& > :not(:first-child)": {
        marginTop: "20px"
      }
    },

    bottomSpace: {
      "& > :last-child": {
        marginBottom: "50px"
      }
    }
  }));

  const classes = useStyles();

  return (
    <div style={{ zIndex: 1 }}>
      {/* <Grid container item direction="row" alignItems="center" lg={12}>
        <Grid item lg={1} container justify="center" alignItems="center">
          <p className="step-number font-grey-color">01 /</p>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={10}>
          <p className="step-title font-grey-color">Personal Information</p>
        </Grid>
      </Grid> */}
      <Grid
        container
        item
        direction="row"
        alignItems="stretch"
        lg={12}
        className={classes.bottomSpace}
      >
        {/* <Spring
          from={{ height: 0, opacity: 0 }}
          to={{ height: 500, opacity: 1 }}
          config={{ duration: 1000 }}
        > */}
        {/* {props => () */}
        {/* <div style={props}> */}
        <Grid item lg={1} container justify="center" alignItems="center">
          <div
            style={{
              width: "2px",
              height: "90%",
              backgroundColor: props.lineEnable ? "#828282" : "#E0E0E0",
            }}
          ></div>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={10} className={classes.rowSpace}>
          <Grid>
            <TextValidator
              label="Full Name *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid full name"
              successMessage="Valid full name"
              isValid={props.isValid.handleFullName}
            />
            <TextValidator
              label="Brand Name *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid brand name"
              successMessage="Valid brand name"
              isValid={props.isValid.handleBrandName}
            />
            {/* <EmailValidator
              label="E-Mail *"
              inputStyle={{ width: "310px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid mail address"
              successMessage="Mail address verification"
            /> */}

            {/* <TextField
              required
              id="required-input"
              label="Full name"
              defaultValue="John Doe"
              style={{ paddingRight: "20px", width: "410px" }}
            />
            <TextField
              required
              id="required-input"
              label="BrandName"
              defaultValue="Newbrands"
              style={{ paddingRight: "20px", width: "410px" }}
            /> */}
          </Grid>
          <Grid>
            <TextValidator
              label="Country *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid country name"
              successMessage="Valid country name"
              isValid={props.isValid.handleCountry}
            />
            <EmailValidator
              label="E-Mail *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid mail address"
              successMessage="Mail address verification"
              isValid={props.isValid.handleEmail}
            />
            {/* <TextField
              required
              id="required-input"
              label="Country"
              defaultValue="France"
              style={{ paddingRight: "20px", width: "410px" }}
            />
            <FormControl style={{ paddingRight: "20px", width: "410px" }}>
              <InputLabel htmlFor="component-error">E-Main *</InputLabel>
              <Input
                id="required-input"
                value={name}
                onChange={handleChange}
                aria-describedby="component-error-text"
              />
              <FormHelperText
                id="component-error-text"
                style={{ textAlign: "right", color: "#219653" }}
              >
                Error
              </FormHelperText>
            </FormControl> */}
          </Grid>
          <p className="step-question">How did you find out about us ?</p>
          <Grid className={classes.root} item lg={10}>
            <Button variant="outlined">Friends</Button>
            <Button variant="outlined">Search engine</Button>
            <Button variant="outlined">Advertising</Button>
            <Button variant="outlined">Mass media</Button>
            <Button variant="outlined">Social network</Button>
            <Button variant="outlined">Other</Button>
          </Grid>
        </Grid>
        {/* </div> */}
        {/* )} */}
        {/* </Spring> */}
      </Grid >
    </div >
  );
}
