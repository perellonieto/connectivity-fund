import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ApplicationSection from "./Sections/ApplicationSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <div
        style={{
          background:
            "linear-gradient(100deg, rgba(36,2,0,1) 0%, rgba(103,58,12,1) 67%)",
          minHeight: "calc(100vh - 80px)"
        }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div
                className={classNames(classes.main, classes.mainRaised)}
                style={{ marginTop: 100, marginBottom: 50 }}
              >
                <div className={classes.container}>
                  <ApplicationSection />
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}
