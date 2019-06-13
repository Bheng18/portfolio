/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  depositContext: {
    marginTop: theme.spacing(0),
    flex: 1,
  },
}));

export default function Deposits() {
  const classes = useStyles();
  return (
    <div id="education" className={classes.depositContext}>
    <React.Fragment>
      <Title>Education</Title>
      <Divider />
      <Typography component="p" variant="subtitle1">
         <u>Bachelor of Science in Computer Science</u>
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
            <li>STI College Shaw</li>
            <li>#25 TG Bldg. Shaw blvd. Pasig City</li>
            <li>Graduated(May 29, 2017)</li>
          </ul>
      </Typography>
           
    </React.Fragment>
    </div>
  );
}