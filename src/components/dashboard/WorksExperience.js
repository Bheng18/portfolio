/* eslint-disable no-script-url */

import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <div id="experience">
      <br /><br /><br /><br />
    <React.Fragment>
      <Title>Works Experience</Title>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
         UnionBank of the Philippines
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
                <li>Position: - Blockchain Cadet / Front-End Developer</li>
                <li>October 2018 – April 2019 </li>
                <li>Responsibilities:
                  <ul>
                    <li>Trained as Blockchain Cadet including Agile Methodology(SCRUM) and Git / GitHub.</li>  
                    <li>Developed frontend services using React.js with Redux framework in Marketing Automation Module. Created Marketing Officer Contacts and Segments management.</li>
                  </ul>
                </li>
          </ul>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
          Emerio Philippines Inc.
      </Typography>
      <Typography component="p" variant="subtitle2">
            <ul>
                <li>Position: - Associate Software Engineer</li>
                <li>August 2017 - February 2018</li>
                <li>Responsibilities:
                  <ul>
                    <li>1-month SAP ABAP trainee under Accenture Philippines</li>
                    <li>Developed periodic Ledger using SAP ABAP programming language.</li>
                  </ul>
                </li>
            </ul>
      </Typography>
      
      
    </React.Fragment>
    </div>
  );
}