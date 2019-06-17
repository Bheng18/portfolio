/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
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
    <React.Fragment>
      <Title>Seminar & Workshops Attended</Title>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
         Blockchain Training
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
                <li>Company: - UnionBank of the Philippines</li>
                <li>Position: - Blockchain Cadet</li>
                <li>Learnings: - Ethereum, Hyperledger, Corda and NEM Blockchain, React.js, Vue.js and Node.js</li>
                <li>Training Period: - October 15, 2018 – April 15, 2019</li>
                <li>Location: - Onyx st. Cor. Meralco Ave. Ortigas, Pasig City</li>
          </ul>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
          SAP ABAP Bootcamp (Systems Applications Products -  Advanced Business Application Programming)
      </Typography>
      <Typography component="p" variant="subtitle2">
            <ul>
                <li>Company:  -  Accenture Philippines</li>
                <li>Position: - Associate Software Engineer</li>
                <li>Training Period: - August 14, 2017 to Sept. 14, 2017</li>
                <li>Location: - Accenture Gateway 2, Cubao Center, Quezon City</li>
            </ul>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
         <u>Web Development - Apache MySQL PHP (XAMPP) Object Oriented in PHP</u>
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
                <li>Company: - American TESOL, Institute Philippines, Inc. TESDA Accredited</li>
                <li>Training for Work Scholarship Program (TWSP) in TESDA</li>
                <li>Learnings: - Created an online payroll system using PHP scripting language in Object Oriented Programming paradigm</li>
                <li>Training period: Oct. 27, 2017 – Nov. 17, 2017</li>
                <li>Location: - 707 Shaw Blvd, Pasig City</li>
          </ul>
      </Typography>
      
    </React.Fragment>
  );
}