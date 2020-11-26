import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import peter from "assets/img/faces/peter.jpg";
import catholijn from "assets/img/faces/catholijn.jpg";
import andrea from "assets/img/faces/andrea.jpg";
import mitra from "assets/img/faces/mitra.jpg";
import carles from "assets/img/faces/carles.jpg";
import marie from "assets/img/faces/marie.jpg";
import joaquin from "assets/img/faces/joaquin.jpg";
import jose from "assets/img/faces/jose.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const team = [
    {
      name: "Mitra Baratchi",
      affiliation: "Leiden Institute of Advanced Computer Science, Netherlands",
      bio:
        "Mitra Baratchi is an Assistant professor of Computer Science, Leiden Institute of Advanced Computer Science (LIACS). She is also affiliated with the Leiden Center for Data Science, and Leiden-Delft-Erasmus (LDE) center for BOLD Cities. Her research interests lie in spatio-temporal, time-series, and mobility data modeling domains. Specifically, she designs algorithms that extract patterns from such data in a fully automated manner. She has collaborations notably with the European Space Agency, Honda Research Institute, various municipalities, and researchers in other scientific disciplines. ",
      image: mitra
    },
    {
      name: "Giovanni Casini",
      affiliation: "National Research Council of Italy",
      bio: "",
      image: team1
    },
    {
      name: "Sašo Džeroski",
      affiliation: "Jozef Stefan Institute, Slovenia",
      bio: "",
      image: team1
    },
    {
      name: "Peter Flach",
      affiliation: "Bristol University, UK",
      bio:
        "Peter Flach has been Professor of Artificial Intelligence at the University of Bristol since 2003. An internationally leading researcher in the areas of mining highly structured data and the evaluation and improvement of machine learning models using ROC analysis, he has also published on the logic and philosophy of machine learning, and on the combination of logic and probability. He is author of Simply Logical: Intelligent Reasoning by Example(John Wiley, 1994) and Machine Learning: the Art and Science of Algorithms that Make Sense of Data (Cambridge University Press, 2012).",
      image: peter
    },
    {
      name: "Hector Geffner",
      affiliation: "Universitat Pompeu Fabra, Spain",
      bio: "",
      image: team1
    },
    {
      name: "Marco Gori",
      affiliation: "Sienna University, Italy",
      bio: "",
      image: team1
    },
    {
      name: "Jose Hernandez-Orallo",
      affiliation: "Universitat Politècnica de València, Spain",
      bio:
        "José Hernández-Orallo is Professor at the Universitat Politècnica de València, Spain and Senior Research Fellow at the Leverhulme Centre for the Future of Intelligence, University of Cambridge, UK. He received a B.Sc. and a M.Sc. in Computer Science from UPV, partly completed at ENSEA(France), and a Ph.D. in Logic from the University of Valencia. His academic and research activities have spanned several areas of artificial intelligence, machine learning, data science and intelligence measurement.",
      image: jose
    },
    {
      name: "Catholijn Jonker",
      affiliation: "Delft University, Netherlands",
      bio:
        "Prof. dr. Catholijn Jonker is head of the Interactive Intelligence group of the faculty of Electrical Engineering, Mathematics, and Computer Science, TU Delft. Jonker is also full professor of Explainable Artificial Intelligence at the Leiden Institute of Advanced Computer Science of Leiden University. She is president of IFAAMAS, board member and a Fellow of EurAI, member of the Academia Europaea, president of ICT Platform of the Netherlands, member of the Royal Holland Society of Sciences and Humanities, member of the CLAIRE National Advisory Board for The Netherlands.",
      image: catholijn
    },
    {
      name: "Gerhard Lakemeyer",
      affiliation: "Aachen University, Germany",
      bio: "",
      image: team1
    },
    {
      name: "Andrea Passerini,",
      affiliation: "Trento University, Italy",
      bio:
        "Andrea Passerini is associate professor at DISI and Adjunct Professor at Aalborg University. He is director of the Structured Machine Learning Group and coordinator of the Research Program on Deep and Structured Machine Learning, both at DISI. His research interests include structured machine learning, statistical relational learning, explainable and interactive machine learning, preference elicitation and learning with constraints. He co-authored over 100 refereed papers, including 40 journal articles, and he regularly publishes at top AI conferences and journals like AAAI, IJCAI, AIJ and MLJ. ",
      image: andrea
    },
    {
      name: "Marie-Christine Rousset",
      affiliation: "Laboratoire d'Informatique de Grenoble, France",
      bio:
        "Marie-Christine Rousset is a Professor of Computer Science, member of the LIG (Laboratory of Informatics in Grenoble), at the University of Grenoble Alpes in France. Her areas of research are Knowledge Representation, Information Integration and the Semantic Web. She is co-responsible of the chair 'Explanaible and Responsible AI' within the MIAI Grenoble Institute of AI.",
      image: marie
    },
    {
      name: "Carles Sierra",
      affiliation:
        "Artificial Intelligence Research Institute (IIIA-CSIC), Spain",
      bio:
        "Carles Sierra is Director of the Artificial Intelligence Research Institute (IIIA) of the Spanish National Research Council (CSIC) located in Barcelona. He is a Fellow of the European Association of AI, EurAI, and its current President. He was the recipient of the ACM/SIGAI Autonomous Agents Research Award in 2019. He organized IJCAI in 2011 in Barcelona and was the President of the IJCAI Program Committee in 2017 in Melbourne.",
      image: carles
    },
    {
      name: "Joaquin Vanschoren",
      affiliation: "Eindhoven University of Technology, Netherlands",
      bio:
        "Joaquin Vanschoren is Assistant Professor at the Eindhoven University of Technology. His research is focused on automated machine learning (AutoML) and meta-learning (learning to learn). He founded the OpenML project (openml.org) and co-organizes the AutoML and meta-learning workshops at ICML and NeurIPS. He co-presented tutorials at NeurIPS and AAAI, and co-authored the book 'Automated Machine Learning' (Springer, 2019). He’s a founding member of ELLIS and CLAIRE, and action editor at JMLR.",
      image: joaquin
    }
  ];
  const teamlist = team.map(member => (
    <GridItem xs={12} sm={12} md={4}>
      <Card plain>
        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
          <img src={member.image} alt="..." className={imageClasses} />
        </GridItem>
        <h4 className={classes.cardTitle}>
          {member.name}
          <br />
          <small className={classes.smallTitle}>{member.affiliation}</small>
        </h4>
        <CardBody>
          <p className={classes.description}>{member.bio}</p>
        </CardBody>
      </Card>
    </GridItem>
  ));

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Scientific Board</h2>
      <div>
        <GridContainer>{teamlist}</GridContainer>
      </div>
    </div>
  );
}
