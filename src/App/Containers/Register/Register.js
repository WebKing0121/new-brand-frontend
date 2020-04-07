import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import { Spring, animated } from 'react-spring/renderprops';
import RegisterTitle from './RegisterTitle/RegisterTitle';
import StepTitle from "./StepTitle/StepTitle";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import CompanyInformation from "./CompanyInformation/CompanyInformation";
import Address from "./Address/Address";
// import AdditionalInformation from './AdditionalInformation/AdditionalInformation';


export default class Register extends Component {

  constructor(props) {
    super();
    this.state = {
      enableStep1: true,
      enableStep2: true,
      enableStep3: true,
      enable4: false,
      //personal information check
      checkFullName: false,
      checkBrandName: false,
      checkCountry: false,
      checkEmail: false,
      checkSelectButton: false,

      //company information check
      checkPhoneNumber: false,
      checkDUNSNo: false,
      checkCompanyFounded: false,
      checkTypeOfCompany: false,
      checkProductionQuantity: false,
      checkTechnicalTemp: false,
      checkCompanySize: false,
      checkNoOfFactories: false,
      checkCompanySelectButton: false,

      titleColorGrey: '#E0E0E0',
      titleColorBlack: '#4F4F4F',
      counter: 0
    }
  }
  //personal information check
  handleFullName = (isValid) => {
    this.setState({ checkFullName: isValid });
  }
  handleBrandName = (isValid) => {
    this.setState({ checkBrandName: isValid });
  }
  handleCountry = (isValid) => {
    this.setState({ checkCountry: isValid });
  }
  handleEmail = (isValid) => {
    this.setState({ checkEmail: isValid });
  }
  handlePersonSelectButton = (isValid) => {
    this.setState({ checkSelectButton: isValid });
  }

  //company information check
  handlePhoneNumber = (isValid) => {
    this.setState({ checkPhoneNumber: isValid });
  }
  handleDUNSNo = (isValid) => {
    this.setState({ checkDUNSNo: isValid });
  }
  handleCompanyFounded = (isValid) => {
    this.setState({ checkCompanyFounded: isValid });
  }
  handleTypeOfCompany = (isValid) => {
    this.setState({ checkTypeOfCompany: isValid });
  }
  handleProductionQuantity = (isValid) => {
    this.setState({ checkProductionQuantity: isValid });
  }
  handleTechnicalTemp = (isValid) => {
    this.setState({ checkTechnicalTemp: isValid });
  }
  handleCompanySize = (isValid) => {
    this.setState({ checkCompanySize: isValid });
  }
  handleNoOfFactories = (isValid) => {
    this.setState({ checkNoOfFactories: isValid });
  }
  handleCompanySelectButton = (isValid) => {
    this.setState({ checkCompanySelectButton: isValid });
  }

  componentDidMount() {
    // const add = document.getElementById('address-step');
    // add.setAttribute("style", "height: auto;")
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.enableStep2) {
      const isPersonalInformationValid = this.state.checkFullName && this.state.checkBrandName && this.state.checkCountry && this.state.checkEmail && this.state.checkSelectButton;
      if (isPersonalInformationValid && this.state.enableStep2 === false) {
        this.setState({ enableStep2: true });
      }
    }

    if (!this.state.enableStep3) {
      const isCompanyInformationValid = this.state.checkPhoneNumber && this.state.checkDUNSNo &&
        this.state.checkCompanyFounded &&
        this.state.checkTypeOfCompany &&
        this.state.checkProductionQuantity &&
        this.state.checkTechnicalTemp &&
        this.state.checkCompanySize &&
        this.state.checkNoOfFactories &&
        this.state.checkCompanySelectButton;
      if (isCompanyInformationValid) {
        this.setState({ enableStep3: true });
      }
    }
  }

  handleChange = e => {
  }

  render() {
    return (
      <Container maxWidth="lg" >
        <Grid container justify="center">
          <Grid item lg={1}></Grid>
          <Grid container justify="center" item lg={10}>
            <RegisterTitle></RegisterTitle>
            <StepTitle stepnum="01" title="Personal information" style={{ zIndex: '-1', color: this.state.enableStep1 ? this.state.titleColorBlack : this.state.titleColorGrey }} />
            <Spring native to={{ height: this.state.enableStep1 ? 'auto' : '0px', opacity: this.state.enableStep1 ? 1 : 0 }}>
              {(props) => (
                <animated.div style={props}>
                  <PersonalInformation
                    isValid={{
                      handleFullName: this.handleFullName,
                      handleBrandName: this.handleBrandName,
                      handleCountry: this.handleCountry,
                      handleEmail: this.handleEmail,
                      handlePersonSelectButton: this.handlePersonSelectButton
                    }}
                    lineEnable={this.state.enableStep2}
                  />
                </animated.div>
              )}
            </Spring>
            <StepTitle stepnum="02" title="Company information" style={{ zIndex: '1', color: this.state.enableStep2 ? this.state.titleColorBlack : this.state.titleColorGrey }} />
            <Spring native to={{ height: this.state.enableStep2 ? 'auto' : '0px', opacity: this.state.enableStep2 ? 1 : 0 }}>
              {(props) => (
                <animated.div style={props}>
                  <CompanyInformation
                    isValid={{
                      handlePhoneNumber: this.handlePhoneNumber,
                      handleDUNSNo: this.handleDUNSNo,
                      handleCompanyFounded: this.handleCompanyFounded,
                      handleTypeOfCompany: this.handleTypeOfCompany,
                      handleProductionQuantity: this.handleProductionQuantity,
                      handleTechnicalTemp: this.handleTechnicalTemp,
                      handleCompanySize: this.handleCompanySize,
                      handleNoOfFactories: this.handleNoOfFactories,
                      handleCompanySelectButton: this.handleCompanySelectButton
                    }}
                    lineEnable={this.state.enableStep3}
                  />
                </animated.div>
              )}
            </Spring>
            <StepTitle stepnum="03" title="Address" style={{ zIndex: '2', color: this.state.enableStep3 ? this.state.titleColorBlack : this.state.titleColorGrey }} />
            <Spring native to={{ height: this.state.enableStep3 ? 'auto' : '0px', opacity: this.state.enableStep3 ? 1 : 0 }}>
              {(props) => (
                <animated.div id="address-step" style={props}>
                  <Address
                    lineEnable={this.state.enable4}
                  />
                </animated.div>
              )}
            </Spring>
            <StepTitle stepnum="04" title="Additional Information" style={{ zIndex: '3', color: this.state.enable4 ? this.state.titleColorBlack : this.state.titleColorGrey }} />
            {/* <AdditionalInformation></AdditionalInformation> */}
          </Grid>
          <Grid item lg={1}></Grid>
        </Grid>
      </Container >
    );
  }
}
