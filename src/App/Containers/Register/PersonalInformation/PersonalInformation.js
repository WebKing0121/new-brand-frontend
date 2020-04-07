import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EmailValidator from "../InputComponents/EmailInput";
import TextValidator from "../InputComponents/TextInput";

import './personal_information.scss';

export default function PersonalInformation(props) {
  const [list, setState] = useState([
    'Friends',
    'Search engine',
    'Advertising',
    'Mass media',
    'Social network',
    'Other'
  ]);
  const [selected, setSelected] = useState(-1);

  return (
    <div className="person-info">
      <Grid
        container
        item
        direction="row"
        alignItems="stretch"
        lg={12}
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
        <Grid className="input-container" item lg={10} container direction="row" justify="flex-start" alignItems="center">
          <Grid>
            <TextValidator
              label="Full Name *"
              errorMessage="Invalid full name"
              successMessage="Valid full name"
              isValid={props.isValid.handleFullName}
            />
            <TextValidator
              label="Brand Name *"
              errorMessage="Invalid brand name"
              successMessage="Valid brand name"
              isValid={props.isValid.handleBrandName}
            />
          </Grid>
          <Grid>
            <TextValidator
              label="Country *"
              errorMessage="Invalid country name"
              successMessage="Valid country name"
              isValid={props.isValid.handleCountry}
            />
            <EmailValidator
              label="E-Mail *"
              errorMessage="Invalid mail address"
              successMessage="Mail address verification"
              isValid={props.isValid.handleEmail}
            />
          </Grid>
          <p className="step-question">How did you find out about us ?</p>
          <Grid item lg={10} container justify="flex-start">
            {
              list && list.map((item, idx) => {
                if (idx === selected) {
                  return <Button key={idx} className="radius-button selected" onClick={() => { setSelected(idx) }}> {item}</Button>
                } else {
                  return <Button key={idx} className="radius-button" onClick={() => { setSelected(idx) }}> {item}</Button>
                }
              })
            }
          </Grid>
        </Grid>
      </Grid >
    </div >
  );
}
