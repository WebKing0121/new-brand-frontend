import React, { Component, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EmailValidator from "../InputComponents/EmailInput/EmailInput";
import TextValidator from "../InputComponents/TextInput/TextInput";

import './PersonalInformation.scss';

export default class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'Friends',
        'Search engine',
        'Advertising',
        'Mass media',
        'Social network',
        'Other'
      ],
      selected: false,
      idx: -1
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selected === true) {
      this.props.isValid.handlePersonSelectButton(this.state.selected);
      this.setState({ selected: false })
    }
  }


  setSelected(idx) {
    this.setState({ selected: true })
    this.setState({ idx: idx })
  }

  render() {
    return (
      <div className="person-info" >
        <Grid
          container
          item
          direction="row"
          alignItems="stretch"
          lg={12}
        >
          <Grid item lg={1} container justify="center" alignItems="center">
            <div
              className="vertical-line"
              style={{
                backgroundColor: this.props.lineEnable ? "#828282" : "#E0E0E0",
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
                isValid={this.props.isValid.handleFullName}
              />
              <TextValidator
                label="Brand Name *"
                errorMessage="Invalid brand name"
                successMessage="Valid brand name"
                isValid={this.props.isValid.handleBrandName}
              />
            </Grid>
            <Grid>
              <TextValidator
                label="Country *"
                errorMessage="Invalid country name"
                successMessage="Valid country name"
                isValid={this.props.isValid.handleCountry}
              />
              <EmailValidator
                label="E-Mail *"
                errorMessage="Invalid mail address"
                successMessage="Mail address verification"
                isValid={this.props.isValid.handleEmail}
              />
            </Grid>
            <p className="step-question">How did you find out about us ?</p>
            <Grid item lg={10} container justify="flex-start">
              {
                this.state.list && this.state.list.map((item, idx) => {
                  if (idx === this.state.idx) {
                    return <Button key={idx} className="radius-button selected" onClick={() => { this.setSelected(idx) }}> {item}</Button>
                  } else {
                    return <Button key={idx} className="radius-button" onClick={() => { this.setSelected(idx) }}> {item}</Button>
                  }
                })
              }
            </Grid>
          </Grid>
        </Grid >
      </div >
    );
  }
}
