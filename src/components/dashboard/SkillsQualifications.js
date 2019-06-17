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
  // subtitle1Color: {
  //   backgroundColor: '#1a237e',
  //   color: '#FFFFFF',
  // },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Skills and Qualifications</Title>
      <Divider />
      <Typography color="primary" component="p" variant="h6">
         Web Development
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ol type="A">
              <li fontSize={18} m={1}>Front-End</li>
                <ul>
                    <li>Javascript Library/framework(React.js & Redux, Angular4-7, Vue.js, Typescript)</li>
                    <li>Material UI, Pug, EJS, Bootstrap, HTML, CSS</li>
                </ul>
              <li fontSize={18} m={1}>Back-End</li>
                <ul>
                    <li>Node.js, Express, ES6, Java EE, Spring MVC, SpringBoot, and PHP</li>
                    <li>API – REST, AXIOS and JPA-Hibernate</li>
                    <li>Apache server, Tomcat Server</li>
                    <li>MySQL, MongoDB, PhpMyAdmin, SAP Sybase and SAP-ABAP</li>
                </ul>
          </ol>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="h6">
          Software Development
      </Typography>
      <Typography component="p" variant="subtitle2">
            <ul>
                <li>Object Oriented Programming and MVC pattern</li>
                <li>Agile Methodology(SCRUM framework), Git, GitHub</li>
            </ul>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="h6">
          Mobile Development
      </Typography>
      <Typography component="p" variant="subtitle2">
            <ul>
                <li>Google Flutter(Android Studio, IOS & SQLite)</li>
            </ul>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="h6">
          Soft Skills    
      </Typography>
      <Typography component="p" variant="subtitle2">
            <ul>
                <li>Good Communication skills, Interpersonal Skills, Positive Attitude, Responsible, Time  Management & TeamWork</li>
            </ul>
      </Typography>
    </React.Fragment>
  );
}