import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

export default function ProfilePersonalInformation(props) {
  const [name, setName] = React.useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

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
        marginTop: "10px"
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
    <Grid container item direction="row" alignItems="center" lg={12} style={props.style}>
      <Grid item lg={1} container justify="center" alignItems="center">
        <p className="step-number font-grey-color">{props.stepnum} /</p>
      </Grid>
      <Grid item lg={1}></Grid>
      <Grid item lg={10}>
        <p className="step-title font-grey-color">{props.title}</p>
      </Grid>
    </Grid>
  );
}