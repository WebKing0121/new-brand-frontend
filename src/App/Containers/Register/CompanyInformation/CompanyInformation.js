import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import TextValidator from "../InputComponents/TextInput";
import PhoneNumberInput from '../InputComponents/PhoneNumberInput';
import './company_information.scss';

export default function CompanyInformation(props) {

  return (
    <div className="company-info" style={{ backgroundColor: 'white', zIndex: 2 }}>
      <Grid
        container
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
              backgroundColor: props.lineEnable ? "#828282" : "#E0E0E0",
            }}
          ></div>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={10} container direction="row" justify="flex-start" alignItems="center">
          <Grid container>
            <PhoneNumberInput
              isValid={props.isValid.handlePhoneNumber}
            />
            <TextValidator
              inputNum={true}
              label="DUNS № (if company created) *"
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleDUNSNo}
            />
          </Grid>
          <Grid>
            <TextValidator
              inputNum={true}
              label="Company founded in *"
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleCompanyFounded}
            />
            <TextValidator
              label="Type of company *"
              errorMessage="Invalid type of company"
              successMessage="Valid type of company"
              isValid={props.isValid.handleTypeOfCompany}
            />
          </Grid>
          <Grid>
            <TextValidator
              label="Mininum production quantity *"
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleProductionQuantity}
            />
            <TextValidator
              label="Basic Technical Templates *"
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleTechnicalTemp}
            />
          </Grid>
          <Grid>
            <TextValidator
              inputNum={true}
              label="Company size *"
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleCompanySize}
            />
            <TextValidator
              label="№ of factories *"
              errorMessage="Invalid input"
              successMessage="Valid input"
              isValid={props.isValid.handleNoOfFactories}
            />
          </Grid>
          <p className="step-question">Software of production using *</p>
          <Grid item lg={10} container justify="flex-start">
            <Button className="radius-button">Friends</Button>
            <Button className="radius-button">Search engine</Button>
            <Button className="radius-button">Advertising</Button>
            <Button className="radius-button">Mass media</Button>
            <Button className="radius-button">Social network</Button>
            <Button className="radius-button">Other</Button>
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}
