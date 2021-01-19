import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import schema from "assets/img/schema.jpeg";

const useStyles = makeStyles(styles);

export default function SectionAbout() {
  const classes = useStyles();

  const tailorlabs = [
    "TECHNISCHE UNIVERSITAET GRAZ, Austria",
    "KATHOLIEKE UNIVERSITEIT LEUVEN, Belgium",
    "VRIJE UNIVERSITEIT BRUSSEL, Belgium",
    "UNIVERZITA KARLOVA, Czech Republic",
    "CESKE VYSOKE UCENI TECHNICKE V PRAZE, Czech Republic",
    "TIETO FINLAND OY, Finland",
    "INSTITUT NATIONAL DE RECHERCHE EN INFORMATIQUE ET AUTOMATIQUE (INRIA), France",
    "CENTRE NATIONAL DE LA RECHERCHE SCIENTIFIQUE (CNRS), France",
    "COMMISSARIAT A L'ENERGIE ATOMIQUE ET AUX ENERGIES ALTERNATIVES (CEA), France",
    "UNIVERSITE D'ARTOIS, France",
    "UNIVERSITE GRENOBLE ALPES, France",
    "UNIVERSITE DE RENNES, France",
    "UNIVERSITE DE LORRAINE, France",
    "UNIVERSITE DE MONTPELLIER, France",
    "ELECTRICITE DE FRANCE, France",
    "TECHNISCHE UNIVERSITAT DARMSTADT, Germany",
    "ALBERT-LUDWIGSUNIVERSITAET FREIBURG, Germany",
    "DEUTSCHES FORSCHUNGSZENTRUM FUR KUNSTLICHE INTELLIGENZ (DFKI), Germany",
    "FRAUNHOFER GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG, Germany",
    "RHEINISCH-WESTFAELISCHE TECHNISCHE HOCHSCHULE AACHEN, Germany",
    "VOLKSWAGEN AG, Germany",
    "ZF FRIEDRICHSHAFEN AG, Germany",
    "ROBERT BOSCH GMBH, Germany",
    "ETHNIKO KAI KAPODISTRIAKO PANEPISTIMIO ATHINON, Greece",
    "UNIVERSITY COLLEGE CORK, Ireland",
    "CONSIGLIO NAZIONALE DELLE RICERCHE (CNR), Italy",
    "UNIVERSITA DEGLI STUDI DI ROMA LA SAPIENZA, Italy",
    "ALMA MATER STUDIORUM - UNIVERSITA DI BOLOGNA, Italy",
    "UNIVERSITA DEGLI STUDI DI TRENTO, Italy",
    "FONDAZIONE BRUNO KESSLER, Italy",
    "CONSORZIO INTERUNIVERSITARIO NAZIONALE PER L'INFORMATICA, Italy",
    "UNIVERSITA DI PISA, Italy",
    "INGEGNERIA INFORMATICA SPA, Italy",
    "BAR ILAN UNIVERSITY, Israel",
    "LUXEMBOURG INSTITUTE OF HEALTH, Luxembourg",
    "UNIVERSITEIT LEIDEN, Netherlands",
    "TECHNISCHE UNIVERSITEIT EINDHOVEN, Netherlands",
    "TECHNISCHE UNIVERSITEIT DELFT, Netherlands",
    "NEDERLANDSE ORGANISATIE VOOR TOEGEPAST NATUURWETENSCHAPPELIJK ONDERZOEK (TNO), Netherlands",
    "PHILIPS ELECTRONICS NEDERLAND BV, Netherlands",
    "CENTRAAL BUREAU VOOR DE STATISTIEK, Netherlands",
    "POLITECHNIKA POZNANSKA, Poland",
    "INSTITUTO SUPERIOR TECNICO, Portugal",
    "UNIVERSIDAD POMPEU FABRA, Spain",
    "AGENCIA ESTATAL CONSEJO SUPERIOR DEINVESTIGACIONES CIENTIFICAS, Spain",
    "UNIVERSIDAD DE MALAGA, Spain",
    "UNIVERSITAT POLITECNICA DE VALENCIA, Spain",
    "SLOVAK UNIVERISTY OF TECHNOLOGY IN BRATISLAVA, Slovakia",
    "COMENIUS UNIVERSITY IN BRATISLAVA, Slovakia",
    "SLOVENSKE CENTRUM PRE VYSKUM UMELEJ INTELIGENCIE - SLOVAK AI, Slovakia",
    "INSTITUT JOZEF STEFAN, Slovenia",
    "LINKOPINGS UNIVERSITET, Sweden",
    "ABB AB, Sweden",
    "ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE (EPFL), Switzerland",
    "UNIVERSITAT BASEL, Switzerland",
    "UNIVERSITY OF OXFORD, United Kingdom",
    "IMPERIAL COLLEGE OF SCIENCE TECHNOLOGY AND MEDICINE, United Kingdom",
    "UNIVERSITY OF BRISTOL, United Kingdom",
    "UNIVERSITY OF LANCASTER, United Kingdom"
  ];

  const tailorlist = tailorlabs.map(lab => <li>{lab}</li>);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>How it works</h2>
              <h5>
                The connectivity fund uses a continuous open call. Every 4
                months, proposals are ranked by an{" "}
                <a href="board">international review committee.</a>
              </h5>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} style={{ paddingTop: 20 }}>
              <img src={schema} width="100%" alt="..." />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12}>
              <div className={classes.title}>
                <h3>When?</h3>
              </div>
              <p>
                You can submit at any time. Proposals will be collected and
                ranked every year according to the following schedule. Latest
                possible submission is 15th of March 2023.
              </p>
              <ul>
                <li>
                  <b>15th of March</b> (anywhere on earth). For{" "}
                  <b>visits/workshops starting 1st of May or later</b>.
                  Notification by 15th of April.
                </li>
                <li>
                  <b>15th of July</b> (anywhere on earth). For{" "}
                  <b>visits/workshops starting 1st of September or later</b>.
                  Notification by 15th of August.
                </li>
                <li>
                  <b>15th of November</b> (anywhere on earth). For{" "}
                  <b>visits/workshops starting 1st of January or later</b>.
                  Notification by 15th of December.
                </li>
              </ul>
              <div className={classes.title}>
                <h3>How much?</h3>
              </div>
              <p>
                We can support visits and workshops up to <b>15.000 EUR</b> per
                proposal. More could be requested given a really good
                motivation. We aim to support 100 visits/workshops over 3 years.
                The fund only covers travel, housing, and sustenance. Only
                actually made and proven expenses are reimbursed.
              </p>
              <div className={classes.title}>
                <h3>What to submit?</h3>
              </div>
              <p>
                You should prepare a <b>short proposal</b>. Maximum length: 5
                pages, 11 point, 1" margins, not including
                references/appendices.
              </p>
              <p>
                Proposal template:
                <ul>
                  <li>Title, abstract, keywords, scientific area</li>
                  <li>AI Excellence (max 4 pages)</li>
                  <ul>
                    <li>
                      Introduction: Significance of proposed research and prior
                      work.
                    </li>
                    <li>Methods: For research visits, detail the technical approach 
                      you have in mind. For workshops, detail who will attend (and why) 
                      and how participants will work together.
                    </li>
                    <li>
                      Expected Results: Please include milestones with timeline
                      estimates. This could include datasets, code release, tech
                      reports, publications, presentations,...
                    </li>
                  </ul>
                  <li>
                    Impact: How will the visit impact you (e.g. your career) or
                    the scientific community?
                  </li>
                  <li>
                    Execution: Motivate your choice of host lab, visit duration,
                    and starting date.
                  </li>
                  <li>
                    Funds needed: Requested amount. Provide estimates of your
                    main expenses.
                  </li>
                  <li>
                    Additional information: Is there anything else that we
                    should know about you (e.g. personal information), the host,
                    or the proposed research?
                  </li>
                </ul>
              </p>
              <p>
                In the appendices, you need to submit your{" "}
                <b>Curriculum Vitae (CV)</b> and an{" "}
                <b>invitation letter from your host</b> stating that they will
                host you during the indicated period. This only applies to research visits.
              </p>
              <div className={classes.title}>
                <h3>What's important?</h3>
              </div>
              <p>
                Proposals will be evaluated on the following points, using the
                respective weigths.
              </p>
              <ul>
                <li>
                  <b>AI Excellence</b> (25%). How does the visit contribute to
                  Trustworthy AI?
                </li>
                <li>
                  <b>Scientific track record</b> (25%). Your prior achievements,
                  taking into account age and personal situation. For workshops, this can 
                  include the track record of the participants or the community as a whole.
                </li>
                <li>
                  <b>Scientific step-up</b> (25%). How does the visit help you
                  grow professionally and establish a worldwide reputation? For
                  workshops: how does the workshop help the participants?
                </li>
                <li>
                  <b>Suitability of the host</b> (12.5%). Is the host lab (or workshop venue)
                  appropriate? Is it the best place to do the proposed research?
                </li>
                <li>
                  <b>Suitability of the visit length</b> (12.5%). Is the visit or workshop 
                  length appropriate and realistic, also taking into account
                  your personal and family situation?
                </li>
              </ul>
              <p>
                During submission, you can choose a preferred evaluator for your
                proposal from the <a href="board">scientific board</a>. The
                actual reviewer may be different as we aim to evenly distribute
                the evaluation load.
              </p>
              <div className={classes.title}>
                <h3>Who can apply? Where can I go?</h3>
              </div>
              <p>
                <b>All European AI researchers</b> are eligible. You should be
                able to demonstrate that you work at a European lab and are active in AI
                through your publication record, or using other proof of
                involvement in AI research projects. You should be{" "}
                <b>
                  from a non-TAILOR lab and interested in visiting a TAILOR lab
                </b>
                . Or, you should be{" "}
                <b>from a TAILOR lab, and be invited by a non-TAILOR lab</b>.
                Workshops can be hosted by either TAILOR or non-TAILOR labs, but
                only non-TAILOR attendants can receive funding.
              </p>
              <p>
                Since the Connectivity Fund is a 'Third Party Funding'
                mechanism, we can only reimburse non-TAILOR participants. In
                practice, this means that, if you are from a non-TAILOR lab, you
                submit the application yourself. People working at a TAILOR lab
                can only be invited to visit a non-TAILOR lab, in which case the
                non-TAILOR lab needs to submit the application.
              </p>
              <p>'European' countries means all EU and associated countries. 
                Before submission, please check whether your lab is located in 
                the EU, an <a href="https://ec.europa.eu/research/participants/data/ref/h2020/grants_manual/hi/3cpart/h2020-hi-list-ac_en.pdf">EU associated country</a>
                (UK is still in negotiation after Brexit), or <a href="https://ec.europa.eu/research/participants/data/ref/h2020/other/wp/2018-2020/annexes/h2020-wp1820-annex-a-countries-rules_en.pdf">
                one of the other countries eligible for funding</a>. Sadly, this 
                excludes countries such as the USA, Canada, or China. If you are 
                not based in one of these countries, you will need to be invited 
                by a European lab who can receive the funding. In almost all
                cases, your own nationality is not important, but rather where the
                lab is located that will receive the funding for your research visit
                or workshop. That can be either your own lab or your host lab. As 
                stated before, that lab should be a non-TAILOR lab to be able to
                recieve third party funding.
               </p>
              <div className={classes.title}>
                <h3>TAILOR labs?</h3>
              </div>
              <p>
                Below is the full list of TAILOR labs you can visit, ordered by
                country. If you are from one of these labs, you can invite
                someone from a non-TAILOR lab to visit you, or be invited to
                visit a non-TAILOR lab.
              </p>
              <ul>{tailorlist}</ul>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
