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
          <li>1-year experience in IT industry, 3 months professional experience in Web Development and 7 months in Mobile Development.</li>
          <li>3-months professional experience in front-end services using React.js Library with Redux technology.</li>
          <li>Developed the Marketing automation management services using React.js with Redux </li>
          <li>7 Months professional experience in Mobile apps Development using React Native with Redux technology</li>
          <li>Developed Motor claims of insurance member</li>
          <li>Integrate google map into mobile application</li>
        </ul>
        <Divider />
        <ul>
           <li>Github: <a href="https://github.com/Bheng18" target="_blank">https://github.com/Bheng18</a></li>
           {/* <li>ThesisProject: <a href="http://jca.x10host.com/JCAweb/" target="_blank">http://jca.x10host.com/JCAweb/</a></li> */}
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