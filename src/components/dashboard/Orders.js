/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, frontEnd, backEnd, database, functionality, githublink) {
  return { id, name, frontEnd, backEnd, database, functionality, githublink };
}

const flutter = <a href="https://github.com/Bheng18/flutter-android-ios-CRUD-SQLite" target="_blank">Open Link</a>;

const rows = [
  createData(0, 'flutter-android-ios-CRUD-SQLite', 'Android/IOS xml', 'Google flutter', 'SQLite', 'Create, Read, Update, Delete', flutter),
  createData(1, 'MERN-CRUD', 'React.js', 'Express.js & Node.js', 'MongoDb', 'Create, Read, Update, Delete', <a href="https://github.com/Bheng18/MERN-CRUD" target="_blank">Open Link</a>),
  createData(2, 'Angular7-CRUD-REST-API-front-end', 'Angular6-7.js', 'None', 'None', 'Create, Read, Update, Delete', <a href="https://github.com/Bheng18/Angular7-CRUD-REST-API-front-end" target="_blank">Open Link</a>),
  createData(3, 'springBoot-JPA-Hibernate-MySQL-REST-API-CRUD-back-end', 'None', 'SpringBoot', 'JPA-Hibernate, MySQL', 'Create, Read, Update, Delete', <a href="https://github.com/Bheng18/springBoot-JPA-Hibernate-MySQL-REST-API-CRUD-back-end" target="_blank">Open Link</a>),
  createData(4, 'nodejs-mysql-back-end-crud', 'None', 'Express.js & Node.js', 'MySQL', 'Create, Read, Update, Delete', <a href="https://github.com/Bheng18/nodejs-mysql-back-end-crud" target="_blank">Open Link</a>),
  createData(5, 'onlineshop', 'Vue.js/Pug', 'Express.js & Node.js', 'MongoDb', 'Create, Read, Update, Delete', <a href="https://github.com/Bheng18/onlineshop" target="_blank">Open Link</a>),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Self Study Project - CRUD Operation</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Front-End</TableCell>
            <TableCell>Back-End</TableCell>
            <TableCell>Database</TableCell>
            <TableCell>Functionality</TableCell>
            <TableCell>GitHub Link</TableCell>
            {/* <TableCell align="right">GitHub Link</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.frontEnd}</TableCell>
              <TableCell>{row.backEnd}</TableCell>
              <TableCell>{row.database}</TableCell>
              <TableCell>{row.functionality}</TableCell>
              <TableCell>{row.githublink}</TableCell>
              {/* <TableCell align="right">{row.githublink}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}