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
      <Title>Studies Completed</Title>
      <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
         Thesis Project: - Online Ordering and Billing with Inventory System
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
            <li>STI College Shaw</li>
            <li>Role: - Programmer</li>
            <li>October 2015 - May 2017</li>
            <li>Scripting Language: - PHP, MySQL, Javascript, Jquery, AJAX, CSS and Bootstrap</li>
            <li>ClientSide: - <a href="http://jca.x10host.com/JCAweb/" target="_blank">http://jca.x10host.com/JCAweb/</a></li>
            <li>AdminSide: - <a href="http://jca.x10host.com/JCAweb/admin/" target="_blank">http://jca.x10host.com/JCAweb/admin/</a></li>
          </ul>
      </Typography>
      {/* <Divider />
      <Typography color="primary" component="p" variant="subtitle1">
         TESDA case study Project: - Online Payroll System
      </Typography>
      <Typography component="p" variant="subtitle2">
          <ul>
            <li>American TESOL Institute of Technology Philippines</li>
            <li>Role: - Programmer</li>
            <li>Scripting Language: - PHP(Object Oriented Programming), MySQL, Javascript, HTML5, and Bootstrap</li>
            <li>October 2017 – November 2017</li>
          </ul>
      </Typography> */}
           
    </React.Fragment>
  );
}