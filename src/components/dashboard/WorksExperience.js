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
                <li>Position: - Blockchain Cadet</li>
                <li>Tasks: - Frond-End Developer(React.js & Redux, SCRUM team)</li>
                <li>Date: - October 15, 2018 – April 15, 2019 </li>
          </ul>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
          Emerio Philippines Inc.
      </Typography>
      <Typography component="p" variant="subtitle2">
            <ul>
                <li>Position: - Associate Software Engineer</li>
                <li>Technology: - SAP ABAP (Object Oriented and MVC)</li>
                <li>Date: - Sept. 14, 2017 - Feb. 28, 2018</li>
            </ul>
      </Typography>
      
      
    </React.Fragment>
    </div>
  );
}