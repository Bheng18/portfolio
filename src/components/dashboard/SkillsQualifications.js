/* eslint-disable no-script-url */

import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  gridAlign: {
    justifyContent: 'start',
  },
  // subtitle1Color: {
  //   backgroundColor: '#1a237e',
  //   color: '#FFFFFF',
  // },
});

export default function Deposits() {
  // const [value, setValue] = React.useState(2);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Technical Skills</Title>
       <Divider />
        <Grid container className={classes.gridAlign}>
        {/* <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Read only</Typography>
          <Rating value={value} readOnly />
        </Box> */}
          <Box bgcolor="background.paper" m={1} border={0} boxShadow={0} >
            <Typography component="p" variant="subtitle2">
              <ul>
                  <li>Javascript(ES6)</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>React.js</li>
                  <li>React-Native</li>
                  <li>Redux</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
              </ul>
              {/* <Rating value={value} readOnly /> */}
            </Typography>      
          </Box>
          <Box bgcolor="background.paper" m={1} border={0} boxShadow={0} >
            <Typography component="p" variant="subtitle2">
              <ul>
                 <li>Material UI</li>
                  <li>Native Base</li>
                  <li>REST API</li>
                  <li>Agile Methodology (SCRUM)</li>
                  <li>Git / Github</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>Object Oriented Programming</li>
              </ul>
            </Typography>      
          </Box> 
        </Grid>
       {/* <Divider /> */}
      {/* <Typography color="primary" component="p" variant="h6">
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
      </Typography> */}
    </React.Fragment>
  );
}