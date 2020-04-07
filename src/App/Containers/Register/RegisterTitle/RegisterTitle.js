import React from "react";
import Grid from "@material-ui/core/Grid";
import './RegisterTitle.scss'

export default function RegisterTitle() {
  return (
    <Grid container item direction="row" justify="center" lg={8}>
      <p className="register-title">
        Let's change the process for a brand new industry!
      </p>
      <p className="register-content">
        No amet voluptua amet consetetur lorem et at rebum tempor sit. Et ipsum
        dolore stet magna, sed sed est no est sit vero. Clita justo tempor
        sadipscing aliquyam dolores vero.
      </p>
    </Grid>
  );
}
