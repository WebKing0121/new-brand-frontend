import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextValidator from "../InputComponents/TextInput";

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
  // const[addressArray, setAddress] = useState();

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

  // useStyles = makeStyles(theme => ({
  //   root: {
  //     "& > *": {}
  //   },

  //   button: {
  //     borderRadius: "50px",
  //     fontSize: "14px",
  //     textTransform: "none",
  //     paddingLeft: "40px",
  //     paddingRight: "40px"
  //   },

  //   rowSpace: {
  //     "& > :not(:first-child)": {
  //       marginTop: "30px"
  //     }
  //   },

  //   bottomSpace: {
  //     "& > :last-child": {
  //       marginTop: "30px"
  //     }
  //   }
  // }));

  // classes = useStyles();

  render() {
    const addressList = this.state.addressArray.map((item, index) => {
      return (
        <Grid key={index} container direction="row">
          <Grid item lg={6}>
            <Paper elevation={0}>
              <p style={{ fontSize: "18px", margin: "0px" }}>
                {item.address}
              </p>
            </Paper>
            <Paper elevation={0}>
              <p className="font-greyer-color" style={{ fontSize: "14px" }}>
                48.866865, 2.330566
                  </p>
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper elevation={0}>
              <p className="font-greyer-color" style={{ fontSize: "14px", margin: '0px' }}>
                This is where you'd like buyers to send payment for items you
                sell. It will be displayed to winning bidders or buyers if you
                accept payment by mail. Learn more about providing a payment
                address.
                  </p>
            </Paper>
          </Grid>
        </Grid>
      );
    });
    return (
      <div style={{ paddingLeft: "10px", backgroundColor: 'white', zIndex: '2' }}>
        {/* <Grid container item direction="row" alignItems="center" lg={12}>
        <Grid item lg={1} container justify="center" alignItems="center">
          <p className="step-number font-grey-color">03 /</p>
        </Grid>
        <Grid item lg={1} />
        <Grid item lg={10}>
          <p className="step-title font-grey-color">Address</p>
        </Grid>
      </Grid> */}
        < Grid container
          item
          direction="row"
          alignItems="stretch"
          lg={12}
          style={{ marginTop: "30px" }} >
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
            item
            lg={8}
            style={{ marginTop: "30px" }}
            container
            justify="center"
          >
            <Grid container alignItems="center">
              <TextValidator
                label="Address *"
                inputStyle={{ width: "420px", fontSize: "18px" }}
                formStyle={{ paddingRight: "20px" }}
                errorMessage="Invalid address"
                successMessage="Valid address"
                handle={this.handleChange}
              />
              {/* <TextField
              required
              id="required-input"
              label="Address"
              defaultValue="10 Place Vendome, 75001 Paris"
              style={{ paddingRight: "20px", width: "420px" }}
            /> */}
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
            {/* <Grid container direction="row">
              <Grid item lg={6}>
                <Paper elevation={0}>
                  <p style={{ fontSize: "18px", margin: "0px" }}>
                    10 Place Vendome, 75001 Paris, France
                </p>
                </Paper>
                <Paper elevation={0}>
                  <p className="font-greyer-color" style={{ fontSize: "14px" }}>
                    48.866865, 2.330566
                </p>
                </Paper>
              </Grid>
              <Grid item lg={6}>
                <Paper elevation={0}>
                  <p className="font-greyer-color" style={{ fontSize: "14px", margin: '0px' }}>
                    This is where you'd like buyers to send payment for items you
                    sell. It will be displayed to winning bidders or buyers if you
                    accept payment by mail. Learn more about providing a payment
                    address.
                </p>
                </Paper>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item lg={6}>
                <Paper elevation={0}>
                  <p style={{ fontSize: "18px", margin: "0px" }}>
                    10 Place Vendome, 75001 Paris, France
                </p>
                </Paper>
                <p className="font-greyer-color" style={{ fontSize: "14px", margin: '0px' }}>
                  48.866865, 2.330566
              </p>
              </Grid>
              <Grid item lg={6}>
                <Paper elevation={0}>
                  <p className="font-greyer-color" style={{ fontSize: "14px", margin: '0px' }}>
                    This is where you'd like buyers to send payment for items you
                    sell. It will be displayed to winning bidders or buyers if you
                    accept payment by mail. Learn more about providing a payment
                    address.
                </p>
                </Paper>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid >
      </div >
    );
  }
}
