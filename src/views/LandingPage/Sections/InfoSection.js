import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CastForEducation from "@material-ui/icons/CastForEducation";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/infoStyle.js";

const useStyles = makeStyles(styles);

export default function InfoSection() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>
              Connecting all of Europe's top AI labs
            </h2>
            <h5 className={classes.description}>
              The TAILOR network includes many of Europe's top AI lab, and we
              want to reach out to the many other excellent labs and
              organizations across Europe to work together and create new
              breakthroughs in AI. We especially aim to support young
              researchers to gain valuable experience and nurture the next
              generation of AI researchers.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Research Visits"
              description="We support research visits between 1 and 12 months. We will pick up the bills so that you can focus on doing excellent AI. You must either be from a non-TAILOR lab visiting a TAILOR lab, or vice versa."
              icon={SupervisedUserCircle}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Workshops"
              description="We support workshops that bring people all across Europe together to solve hard problems in an open atmosphere. Workshops should explicitly bring TAILOR and Non-TAILOR researchers together."
              icon={CastForEducation}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Great! Can I apply?</h2>
            <h5 className={classes.description}>
              The connectivity fund is open to{" "}
              <b>all European AI researchers</b>. You should be able to
              demonstrate that you live in Europe and are active in AI through
              your publication record, or using other proof of involvement in AI
              research projects. You need a great idea to do excellent AI
              research, and have an invitation letter from your hosting lab. The
              focus lies on connecting TAILOR and non-TAILOR labs. Hence, you
              should be from a non-TAILOR lab and interested in visiting a
              TAILOR lab. Or, you should be from a TAILOR lab, and be invited by
              a non-TAILOR lab. Workshops can be hosted by either TAILOR or
              non-TAILOR labs, but only non-TAILOR attendants can receive
              funding.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Research Visits Goals"
              description="For research visits, we are looking for visits that help young researchers gain experience and world-wide recognition by working in excellent labs (scientific step-up). Ideally, the visit also brings in expertise from outside the TAILOR network (scientific influx) and/or align different European AI initiatives (scientific alliance)."
              icon={SupervisedUserCircle}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Workshop Goals"
              description="We are looking for workshops that facilitate scientific exchange with the worldwide AI community to tackle big challenges in AI. Alternatively, we welcome workshops aimed at providing a swift and coordinated reaction to unexpected developments, and to build bridges with other European AI initiatives."
              icon={CastForEducation}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.section}>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="primary" size="lg" href="about" target="_blank">
            Learn how it works
          </Button>
          <Button color="primary" size="lg" href="apply" target="_blank">
            Apply now
          </Button>
        </GridItem>
      </div>
    </div>
  );
}
