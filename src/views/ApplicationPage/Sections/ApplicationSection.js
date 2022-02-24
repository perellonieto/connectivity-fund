import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

// @material-ui/icons
import People from "@material-ui/icons/People";
import Label from "@material-ui/icons/Label";
import Email from "@material-ui/icons/Email";
import FileCopy from "@material-ui/icons/FileCopy";
import Input from "@material-ui/core/Input";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { useForm } from "react-hook-form";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
              <h2 className={classes.title}>Submit your proposal</h2>
              <h4 className={classes.description}>
                Before submission, please{" "}
                <Link to="about">read the submission instructions</Link>.
          </h4>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
              <ul style={{ color: "#3c4858" }}>
                <li>To submit your proposal, prepare it as a single PDF, including all appendices (e.g. CV and invitation letter).</li>
                <li>Click the button below to start your submission via Easychair. You may need to create an Easychair account.</li>
              </ul>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                href="https://easychair.org/conferences/?conf=tailor-connect-2021-1"
              >
                Start submission
          </Button>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
