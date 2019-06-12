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

export default function Objective() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Objective</Title>
      <Divider />
      {/* <Typography component="p" variant="subtitle1">
         <u>Bachelor of Science in Computer Science</u>
      </Typography> */}
      <Typography component="p" variant="subtitle2">
          <p>To pursue a career in the field of information technology that offers me an opportunity to enhance and utilize my knowledge and for the career growth</p>
      </Typography>
           
    </React.Fragment>
  );
}