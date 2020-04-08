import React from "react";
import Grid from "@material-ui/core/Grid";

import './StepTitle.scss';

export default function ProfilePersonalInformation(props) {

  return (
    <Grid className="step-title" container item direction="row" alignItems="center" style={props.style} lg={12}>
      <Grid item lg={1} container justify="center" alignItems="center">
        <p className="step-title-number">{props.stepnum} /</p>
      </Grid>
      <Grid item lg={1}></Grid>
      <Grid item lg={10}>
        <p className="step-title-title">
          {
            props.showDot && <span style={{ fontSize: '20px', color: props.check ? '#27AE60' : '#4F4F4F' }}> • </span>
          }
          {props.title}
        </p>
      </Grid>
    </Grid>
  );
}