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
    <React.Fragment>
      <Title>Seminar & Workshops Attended</Title>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
         Blockchain Training
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
                <li><strong>UNIONBANK of the PHILIPPINES</strong></li>
                <li>Blockchain Cadet / Front-End Developer</li>
                <li>October 2018 – April 2019</li>
                <li>UnionBank Plaza Ortigas, Pasig City</li>
          </ul>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
          SAP ABAP Bootcamp (Systems Applications Products -  Advanced Business Application Programming)
      </Typography>
      <Typography component="p" variant="subtitle2">
            <ul>
                <li><strong>ACCENTURE PHILIPPINES</strong></li>
                <li>Associate Software Engineer</li>
                <li>August 2017 - September 2017</li>
                <li>Accenture Gateway 2, Cubao Center, Quezon City</li>
            </ul>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
         Web Development - Apache MySQL PHP (XAMPP) Object Oriented in PHP
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
                <li><strong>American TESOL, Institute Philippines, Inc.</strong> - TESDA Accredited</li>
                <li>TESDA Trainee / Web Developer</li>
                <li>October 2017 – November 2017</li>
                <li>Kapitolyo Shaw Blvd, Pasig City</li>
          </ul>
      </Typography>
      
    </React.Fragment>
  );
}