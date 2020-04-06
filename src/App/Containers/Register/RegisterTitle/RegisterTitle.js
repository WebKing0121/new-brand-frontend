import React from "react";
import Grid from "@material-ui/core/Grid";

export default function RegisterTitle() {
  return (
    <Grid container item direction="row" justify="center" lg={8}>
      <p className="profile-title font-profile-title-color">
        Let's change the process for a brand new industry!
      </p>
      <p className="profile-content font-greyer-color">
        No amet voluptua amet consetetur lorem et at rebum tempor sit. Et ipsum
        dolore stet magna, sed sed est no est sit vero. Clita justo tempor
        sadipscing aliquyam dolores vero.
      </p>
    </Grid>
  );
}
