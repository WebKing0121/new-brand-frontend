import React, { Component, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import TextValidator from "../InputComponents/TextInput/TextInput";
import PhoneNumberInput from '../InputComponents/PhoneNumberInput/PhoneNumberInput';
import './CompanyInformation.scss';

export default class CompanyInformation extends Component {
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
      this.props.isValid.handleCompanySelectButton(this.state.selected);
      this.setState({ selected: false })
    }
  }


  setSelected(idx) {
    this.setState({ selected: true })
    this.setState({ idx: idx })
  }

  render() {
    return (
      <div className="company-info" >
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
            <Grid container>
              <PhoneNumberInput
                isValid={this.props.isValid.handlePhoneNumber}
              />
              <TextValidator
                inputNum={true}
                label="DUNS № (if company created) *"
                errorMessage="Invalid input"
                successMessage="Valid input"
                isValid={this.props.isValid.handleDUNSNo}
              />
            </Grid>
            <Grid>
              <TextValidator
                inputNum={true}
                label="Company founded in *"
                errorMessage="Invalid input"
                successMessage="Valid input"
                isValid={this.props.isValid.handleCompanyFounded}
              />
              <TextValidator
                label="Type of company *"
                errorMessage="Invalid type of company"
                successMessage="Valid type of company"
                isValid={this.props.isValid.handleTypeOfCompany}
              />
            </Grid>
            <Grid>
              <TextValidator
                label="Mininum production quantity *"
                errorMessage="Invalid input"
                successMessage="Valid input"
                isValid={this.props.isValid.handleProductionQuantity}
              />
              <TextValidator
                label="Basic Technical Templates *"
                errorMessage="Invalid input"
                successMessage="Valid input"
                isValid={this.props.isValid.handleTechnicalTemp}
              />
            </Grid>
            <Grid>
              <TextValidator
                inputNum={true}
                label="Company size *"
                errorMessage="Invalid input"
                successMessage="Valid input"
                isValid={this.props.isValid.handleCompanySize}
              />
              <TextValidator
                label="№ of factories *"
                errorMessage="Invalid input"
                successMessage="Valid input"
                isValid={this.props.isValid.handleNoOfFactories}
              />
            </Grid>
            <p className="step-question">Software of production using *</p>
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
        </Grid>
      </div >
    );
  }
}
