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
    <div id="aboutMe">
        <br /><br /><br /><br />
    <React.Fragment>
      <Title>About Me</Title>
      <Divider />
      
      <Typography component="p" variant="subtitle2">
        <ul>
          <li>1-year experience in IT industry and almost 6 months professional experience in Programming and Web Development.</li>
          <li>6-months relevant experience Using Node.js, Express.js and ES6 as back-end.</li>
          <li>3-months experience in React.js Library with Redux as Front-End.</li>
          <li>Developed the front-end services using React.js with Redux and REST API – HTTP </li>
          <li>Developed the frontend and backend CRUD operation using Angular4-7 as frontend and Node.js/Express, Spring MVC, SpringBoot, Spring Webflux.</li>
        </ul>
        <Divider />
        <ul>
           <li>Github: <a href="https://github.com/Bheng18" target="_blank">https://github.com/Bheng18</a></li>
           <li>ThesisProject: <a href="http://jca.x10host.com/JCAweb/" target="_blank">http://jca.x10host.com/JCAweb/</a></li>
        </ul>
      </Typography>
      
      {/* <Typography color="textSecondary" className={classes.depositContext}> 
      
      </Typography> */}
      {/* <div>
        <Link color="primary" href="javascript:;">
          View balance
        </Link>
      </div> */}
    </React.Fragment>
    </div>
  );
}