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
      <Title>Joebert Fundador Tan</Title>
      <Divider />
      <Typography component="p" variant="subtitle2">
        <p>8E Mangga Street, Block 37 Addition Hills, Mandaluyong City <br></br>
           +639176932537<br></br>
           joebert.fundador@gmail.com<br></br>
           Github: <a href="https://github.com/Bheng18" target="_blank">https://github.com/Bheng18</a><br></br>
           ThesisProject: <a href="http://jca.x10host.com/JCAweb/" target="_blank">http://jca.x10host.com/JCAweb/</a><br></br>
        </p>
      </Typography>
      {/* <Typography color="textSecondary" className={classes.depositContext}> 
      
      </Typography> */}
      {/* <div>
        <Link color="primary" href="javascript:;">
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}