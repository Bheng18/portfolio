import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  // depositContext: {
  //   flex: 1,
  // },
  // titleColor: {
  //   backgroundColor: '#1a237e',
  //   color: '#FFFFFF',
  // },
});

export default function Title(props) {
  const classes = useStyles();
  return (
    <Typography component="h2" variant="h6" className={classes.titleColor} align="center"> 
      {props.children}
    </Typography>
  );
}
    {/* gutterBottom */}

Title.propTypes = {
  children: PropTypes.node,
};