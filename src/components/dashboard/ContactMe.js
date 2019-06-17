// /* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Title from './Title';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import GoogleMap from './GoogleMap';
import Call from "@material-ui/icons/Call";
import Email from "@material-ui/icons/Email";
import MyLocation from "@material-ui/icons/MyLocation";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  paper: {
    margin: 0,
    width: 979,
  },
 
});



export default function ImageAvatars() {
  const classes = useStyles();

  return (
      <div id="contact">
         <br /><br /><br /><br />
    <React.Fragment>
            <Title>Contact Me</Title>
            <Grid item xs={12}>
                <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
                    <Typography color="primary" component="p" variant="subtitle2">
                        <MyLocation /> 8E Mangga Street, Block 37 Addition Hills, Mandaluyong City 
                    </Typography>
                    <Typography color="primary" component="p" variant="h6">
                       <Call />{'    '}+63 917 6932 537
                    </Typography>
                    <Typography color="primary" component="p" variant="h6">
                       <Email />{'   '} joebert.fundador@gmail.com
                    </Typography>
                    

                </Box>
            </Grid>
              {/* </Box> */}
    

          <Grid container justify="space-around" alignItems="center">
            <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
              <Typography color="primary" className={classes.depositContext} align="center">
                 My Location
              </Typography>
              <img alt="Remy Sharp" src="/images/locationkoZoom200.PNG" className={classes.paper}  />
            </Box>  
          </Grid>


    </React.Fragment>
    </div>
  );
}




// import React from 'react';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Title from './Title';

// const useStyles = makeStyles({
//   depositContext: {
//     flex: 1,
//   },
// });

// export default function Deposits() {
//   const classes = useStyles();
//   return (
//     <React.Fragment>

//       {/* <Title>Recent Deposits</Title>
//       <Typography component="p" variant="h4">
//         $3,024.00
//       </Typography>
//       <Typography color="textSecondary" className={classes.depositContext}>
//         on 15 March, 2019
//       </Typography>
//       <div>
//         <Link color="primary" href="javascript:;">
//           View balance
//         </Link>
//       </div> */}
//     </React.Fragment>
//   );
// }