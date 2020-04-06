import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
// import 'react-phone-input-2/lib/style.css'

import TextValidator from "../InputComponents/TextInput";
import PhoneNumberInput from '../InputComponents/PhoneNumberInput';

export default function CompanyInformation(props) {
  // const [name, setName] = useState("");
  // const [value, setValue] = useState();

  //check input valid
  // const [checkFullName, setCheckFullName] = useState();
  // const [checkBrandName, setCheckBrandName] = useState();
  // const [checkCountry, setCheckCountry] = useState();
  // const [checkEmail, setCheckEmail] = useState();
  // const [checkSelectButton, setCheckSelectButton] = useState();

  // const handleChange = event => {
  //   setName(event.target.value);
  // };

  // const handleFullName = () => {

  // }
  // const handleBrandName = () => {

  // }
  // const handleCountry = () => {

  // }
  // const handleEmail = () => {

  // }
  // const handleSelectButton = () => {

  // }

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
      "& > *": {
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
    <div id="aaa" style={{ backgroundColor: 'white', zIndex: 2 }}>
      {/* <Grid container item direction="row" alignItems="center" lg={12}>
        <Grid item lg={1} container justify="center" alignItems="center">
          <p className="step-number font-grey-color">02 /</p>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={10}>
          <p className="step-title font-grey-color">Company Information</p>
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
          <Grid container alignItems="center">
            <PhoneNumberInput
              isValid={props.isValid.handlePhoneNumber}
            />
            {/* <FormControl style={{ paddingRight: "20px", width: "410px" }}>
              <InputLabel htmlFor="component-error">Phone Number *</InputLabel>
              <Input
                id="required-input"
                value={name}
                onChange={handleChange}
                aria-describedby="component-error-text"
              />
              <FormHelperText
                id="component-error-text"
                style={{ textAlign: "right" }}
              >
                Error
              </FormHelperText>
            </FormControl> */
            }
            <TextValidator
              inputNum={true}
              label="DUNS № (if company created) *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleDUNSNo}
            />
            {/* <TextField
              required
              id="required-input"
              label="DUNS NO(if company created)"
              defaultValue="134954"
              style={{ paddingRight: "20px", width: "410px" }}
            /> */}
          </Grid>
          <Grid>
            <TextValidator
              inputNum={true}
              label="Company founded in *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleCompanyFounded}
            />
            <TextValidator
              label="Type of company *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid type of company"
              successMessage="Valid type of company"
              isValid={props.isValid.handleTypeOfCompany}
            />
            {/* <TextField
              required
              id="required-input"
              label="Company founded in"
              defaultValue="1996"
              style={{ paddingRight: "20px", width: "410px" }}
            />
            <TextField
              required
              id="required-input"
              label="Type of company"
              defaultValue="Limited Company"
              style={{ paddingRight: "20px", width: "410px" }}
            /> */}
          </Grid>
          <Grid>
            <TextValidator
              label="Mininum production quantity *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleProductionQuantity}
            />
            <TextValidator
              label="Basic Technical Templates *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleTechnicalTemp}
            />
            {/* <TextField
              required
              id="required-input"
              label="Minimun production quantity"
              defaultValue="> 20"
              style={{ paddingRight: "20px", width: "410px" }}
            />
            <TextField
              required
              id="required-input"
              label="Basic Technical Templates"
              defaultValue="Only one!"
              style={{ paddingRight: "20px", width: "410px" }}
            /> */}
          </Grid>
          <Grid>
            <TextValidator
              inputNum={true}
              label="Company size *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleCompanySize}
            />
            <TextValidator
              label="№ of factories *"
              inputStyle={{ width: "310px", fontSize: "18px" }}
              formStyle={{ paddingRight: "20px" }}
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleNoOfFactories}
            />
            {/* <TextField
              required
              id="required-input"
              label="Company size"
              defaultValue="0-20"
              style={{ paddingRight: "20px", width: "410px" }}
            />
            <TextField
              required
              id="required-input"
              label="No of factories"
              defaultValue="2 usines recense"
              style={{ paddingRight: "20px", width: "410px" }}
            /> */}
          </Grid>
          <p className="step-question">Software of production using *</p>
          <Grid className={classes.root} item lg={10}>
            <Button variant="outlined">Friends</Button>
            <Button variant="outlined">Search engine</Button>
            <Button variant="outlined">Advertising</Button>
            <Button variant="outlined">Mass media</Button>
            <Button variant="outlined">Social network</Button>
            <Button variant="outlined">Other</Button>
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}
