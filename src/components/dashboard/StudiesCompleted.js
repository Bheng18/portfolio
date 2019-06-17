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
      <Title>Studies Completed</Title>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
         Thesis Project: - Online Ordering and Billing with Inventory System
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
            <li>School: - STI College Shaw</li>
            <li>Role: - Programmer</li>
            <li>Duration: - One and Half year. (October 2015 - May 2017)</li>
            <li>Technology: - PHP, MySQL, Javascript, Jquery, AJAX, CSS and Bootstrap</li>
            <li>ClientSide: - <a href="http://jca.x10host.com/JCAweb/" target="_blank">http://jca.x10host.com/JCAweb/</a></li>
            <li>AdminSide: - <a href="http://jca.x10host.com/JCAweb/admin/" target="_blank">http://jca.x10host.com/JCAweb/admin/</a></li>
          </ul>
      </Typography>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
         TESDA case study Project: - Online Payroll System
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
            <li>School: - American TESOL Institute of Technology Philippines</li>
            <li>Role: - Programmer</li>
            <li>Technology: - PHP(Object Oriented Programming), MySQL, Javascript, HTML5, and Bootstrap</li>
            <li>Duration: - 5 Days</li>
            <li>Date Covered: Oct.27, 2018 – Nov. 20, 2017</li>
          </ul>
      </Typography>
           
    </React.Fragment>
  );
}