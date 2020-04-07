import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextValidator from "../InputComponents/TextInput";

import './address.scss';

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
    this.state = {
      addressArray: [
        {
          address: "10 Place Vendome, 75001 Paris, France",
          coodinate: '48.866865, 2.330566',
          detail: "This is where you'd like buyers to send payment for items you sell.It will be displayed to winning bidders or buyers if you  accept payment by mail.Learn more about providing a payment address."
        },
        {
          address: "10 Place Vendome, 75001 Paris, France",
          coodinate: '48.866865, 2.330566',
          detail: "This is where you'd like buyers to send payment for items you sell.It will be displayed to winning bidders or buyers if you  accept payment by mail.Learn more about providing a payment address."
        }
      ],
      value: ''
    }
  }

  handelClick = () => {
    this.setState({
      addressArray: [
        ...this.state.addressArray,
        {
          address: this.state.value,
          coodinate: '48.866865, 2.330566',
          detail: "This is where you'd like buyers to send payment for items you sell.It will be displayed to winning bidders or buyers if you  accept payment by mail.Learn more about providing a payment address."
        }
      ]
    })
    console.log(this.state.addressArray)
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  componentDidMount() {

  }

  render() {
    const addressList = this.state.addressArray.map((item, index) => {
      return (
        <div className="address-content" key={index}>
          <Grid container direction="row">
            <Grid item lg={6}>
              <Paper elevation={0}>
                <p className="address-text">
                  {item.address}
                </p>
              </Paper>
              <Paper elevation={0}>
                <p className="address-coodinates">
                  48.866865, 2.330566
                </p>
              </Paper>
            </Grid>
            <Grid item lg={6}>
              <Paper elevation={0}>
                <p className="address-detail">
                  This is where you'd like buyers to send payment for items you
                  sell. It will be displayed to winning bidders or buyers if you
                  accept payment by mail. Learn more about providing a payment
                  address.
                  </p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
    });
    return (
      <div className="address-step">
        < Grid container
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
                backgroundColor: this.props.lineEnable ? "#828282" : "#E0E0E0",
              }}
            ></div>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid
            className="address-container"
            item
            lg={8}
            container
            justify="center"
          >
            <Grid container alignItems="center">
              <TextValidator
                id="address-input"
                label="Address *"
                errorMessage="Invalid address"
                successMessage="Valid address"
                handle={this.handleChange}
              />
              <Button
                variant="outlined"
                style={{
                  borderRadius: "50px",
                  fontSize: "14px",
                  textTransform: "none",
                  paddingLeft: "40px",
                  paddingRight: "40px"
                }} onClick={() => this.handelClick()}>
                Add address
              </Button>
            </Grid>
            {addressList}
          </Grid>
        </Grid >
      </div >
    );
  }
}
