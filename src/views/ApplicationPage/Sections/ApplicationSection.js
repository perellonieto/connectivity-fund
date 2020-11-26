import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

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
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Submit your proposal</h2>
          <h4 className={classes.description}>
            Before submission, please{" "}
            <a href="about">read the submission instructions</a>.
          </h4>
          <form
            action="https://formspree.io/f/myybpoqa"
            method="POST"
            onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
          >
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Proposal Title"
                  id="title"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "text",
                    inputRef: register,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Label className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Author Name(s)"
                  id="author"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "text",
                    inputRef: register,
                    endAdornment: (
                      <InputAdornment position="end">
                        <People className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    inputRef: register,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    type: "text",
                    inputRef: register
                  }}
                />
                <GridItem xs={12} sm={12} md={4}>
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </GridItem>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
