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
import InfoSection from "./Sections/InfoSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const particleprops = {
    particles: {
      move: {
        enable: true,
        outMode: "bounce",
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 800
        },
        value: 80
      },
      links: {
        distance: 120
      }
    }
  };
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div
        style={{
          background:
            "linear-gradient(100deg, rgba(2,0,36,1) 0%, rgba(58,12,103,1) 67%)"
        }}
      >
        <Parallax>
          <div className={classes.container}>
            <Particles width="100%" height="100%" params={particleprops} />
            <GridContainer style={{ marginTop: -200, marginBottom: 200 }}>
              <GridItem xs={12} sm={12} md={12}>
                <h1 className={classes.title}>Visit AI Labs across Europe.</h1>
                <h4>
                  TAILOR is a European Network of Excellence on Trustworthy
                  Artificial Intelligence. To establish a truly vibrant network,
                  the Connectivity Fund provides funding to AI researchers from
                  across Europe for research visits or workshops.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="apply"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Apply now
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <InfoSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
