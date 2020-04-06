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
      enable1: true,
      enable2: false,
      enable3: false,
      enable4: false,
      //personal information check
      checkFullName: false,
      checkBrandName: false,
      checkCountry: false,
      checkEmail: false,

      //company information check
      checkPhoneNumber: false,
      checkDUNSNo: false,
      checkCompanyFounded: false,
      checkTypeOfCompany: false,
      checkProductionQuantity: false,
      checkTechnicalTemp: false,
      checkCompanySize: false,
      checkNoOfFactories: false,

      titleColorGrey: '#E0E0E0',
      titleColorBlack: 'black',
      counter: 0
    }
  }
  // const[enable1, setEnable1] = useState(false);
  // const[enable2, setEnable2] = useState(false);
  // const[enable3, setEnable3] = useState(false);
  // const[counter, setCounter] = useState(0);

  // const[value, setValue] = useState();

  // //check input valid
  // const[checkFullName, setCheckFullName] = useState(false);
  // const[checkBrandName, setCheckBrandName] = useState(false);
  // const[checkCountry, setCheckCountry] = useState(false);
  // const[checkEmail, setCheckEmail] = useState(false);
  // const[checkSelectButton, setCheckSelectButton] = useState(false);

  //personal information check
  handleFullName = (isValid) => {
    this.setState({ checkFullName: isValid });
    // this.checkValid();
  }
  handleBrandName = (isValid) => {
    this.setState({ checkBrandName: isValid });
    // this.checkValid();
  }
  handleCountry = (isValid) => {
    this.setState({ checkCountry: isValid });
    // this.checkValid();
  }
  handleEmail = (isValid) => {
    this.setState({ checkEmail: isValid });
    // this.checkValid();
  }
  handleSelectButton = (isValid) => {
    // this.state({ checkCountry: isValid });
    // this.checkValid();
  }

  //company information check
  handlePhoneNumber = (isValid) => {
    this.setState({ checkPhoneNumber: isValid });
    // this.checkValid();
  }
  handleDUNSNo = (isValid) => {
    this.setState({ checkDUNSNo: isValid });
    // this.checkValid();
  }
  handleCompanyFounded = (isValid) => {
    this.setState({ checkCompanyFounded: isValid });
    // this.checkValid();
  }
  handleTypeOfCompany = (isValid) => {
    this.setState({ checkTypeOfCompany: isValid });
    // this.checkValid();
  }
  handleProductionQuantity = (isValid) => {
    this.setState({ checkProductionQuantity: isValid });
    // this.checkValid();
  }
  handleTechnicalTemp = (isValid) => {
    this.setState({ checkTechnicalTemp: isValid });
    // this.checkValid();
  }
  handleCompanySize = (isValid) => {
    this.setState({ checkCompanySize: isValid });
    // this.checkValid();
  }
  handleNoOfFactories = (isValid) => {
    this.setState({ checkNoOfFactories: isValid });
    // this.checkValid();
  }

  componentDidMount() {
    const add = document.getElementById('address-step');
    console.log(add)
    add.setAttribute("style", "height: auto;")
  }



  componentDidUpdate(prevProps, prevState) {
    // this.checkValid();
    if (!this.state.enable2) {
      const isPersonalInformationValid = this.state.checkFullName && this.state.checkBrandName && this.state.checkCountry && this.state.checkEmail;
      if (isPersonalInformationValid && this.state.enable2 === false) {
        this.setState({ enable2: true });
      }
    }

    if (!this.state.enable3) {
      const isCompanyInformationValid = this.state.checkPhoneNumber && this.state.checkDUNSNo &&
        this.state.checkCompanyFounded &&
        this.state.checkTypeOfCompany &&
        this.state.checkProductionQuantity &&
        this.state.checkTechnicalTemp &&
        this.state.checkCompanySize &&
        this.state.checkNoOfFactories;
      if (isCompanyInformationValid) {
        this.setState({ enable3: true });
      }
    }


  }


  //check profilepersonal
  // const[checkPerson, setCheckPerson] = useState();

  // const handleFullName = (valid) => {
  //   setEnable2(valid);
  // }


  // const handleCheckPerson = (valid) => {
  //   setEnable2(valid);
  // }

  handleChange = e => {
    console.log(this.state.counter)
    this.setState({ counter: this.state.counter + 1 });
    switch (this.state.counter) {
      case 1:
        this.setState({ enable1: true });
        break;
      case 2:
        this.setState({ enable1: true });
        break;
      case 3:
        this.setState({ enable1: true });
        break;
    }
    console.log(this.state.counter)
  }

  render() {
    return (
      <Container maxWidth="lg" >
        <Grid container justify="center">
          <Grid item lg={1}></Grid>
          <Grid container justify="center" item lg={10}>
            <RegisterTitle></RegisterTitle>
            <StepTitle stepnum="01" title="Personal information" />
            {/* <Transition
              native
              unique
              reset
              items={enable1}
              from={{ height: 0, opacity: 0 }}
              enter={{ height: 400, opacity: 1 }}
            // config={{ duration: 1000 }}
            > */}
            <Spring native to={{ height: this.state.enable1 ? '375px' : '0px', opacity: this.state.enable1 ? 1 : 0 }} config={{ duration: 500 }}>
              {(props) => (
                <animated.div style={props}>
                  <PersonalInformation
                    isValid={{
                      handleFullName: this.handleFullName,
                      handleBrandName: this.handleBrandName,
                      handleCountry: this.handleCountry,
                      handleEmail: this.handleEmail
                    }}
                    lineEnable={this.state.enable2}
                  />
                </animated.div>
              )}
            </Spring>
            {/* </Transition> */}
            <StepTitle stepnum="02" title="Company information" style={{ backgroundColor: 'white', zIndex: '1', color: this.state.enable2 ? this.state.titleColorBlack : this.state.titleColorGrey }} />
            <Spring native to={{ height: this.state.enable2 ? 'auto' : '0px', opacity: this.state.enable2 ? 1 : 0 }}>
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
                    }}
                    lineEnable={this.state.enable3}
                  />
                </animated.div>
              )}
            </Spring>
            {/* <CompanyInformation></CompanyInformation> */}
            <StepTitle stepnum="03" title="Address" style={{ backgroundColor: 'white', zIndex: '1', color: this.state.enable3 ? this.state.titleColorBlack : this.state.titleColorGrey }} />
            <Spring native to={{ height: this.state.enable3 ? 'auto' : '0px', opacity: this.state.enable3 ? 1 : 0 }}>
              {(props) => (
                <animated.div id="address-step" style={props}>
                  <Address
                    lineEnable={this.state.enable4}
                  />
                </animated.div>
              )}
            </Spring>
            <StepTitle stepnum="04" title="Additional Information" style={{ backgroundColor: 'white', zIndex: '1', color: this.state.enable4 ? this.state.titleColorBlack : this.state.titleColorGrey }} />
            {/* <Address></Address> */}
            {/* <AdditionalInformation></AdditionalInformation> */}
          </Grid>
          <Grid item lg={1}></Grid>
        </Grid>
      </Container >
    );
  }
}
