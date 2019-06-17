// /* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Title from './Title';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 0,
    width: 200,
    height: 200,
  },
 
});



export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div id="portfolio">
      <br /><br /><br /><br />
    <React.Fragment>
            <Title>Portfolio</Title>
            <Divider />
              <Typography component="p" variant="h6" align="center">
                 Click the image to see the project 
              </Typography>
              
    <Grid container justify="space-around" alignItems="center">
          {/* <Avatar alt="Remy Sharp" src="/images/benphoto.jpg" className={classes.avatar} /> */}
          <Link href="http://jca.x10host.com/JCAweb/" target="_blank">
            <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
              <Typography color="inherit" className={classes.depositContext} align="center">
                 Thesis Project
              </Typography>
              <Avatar alt="Remy Sharp" src="/images/thesisProject.PNG" className={classes.bigAvatar}  />
              <Typography color="inherit" className={classes.depositContext} align="center">
                 View 
              </Typography>
            </Box>  
          </Link>
          <Link href="https://murmuring-journey-51985.herokuapp.com/i2i/itemList/" target="_blank">
            <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
              <Typography color="inherit" className={classes.depositContext} align="center">
                  MERN-CRUD
                </Typography>
              <Avatar alt="Remy Sharp" src="/images/mern.PNG" className={classes.bigAvatar} />
              <Typography color="inherit" className={classes.depositContext} align="center">
                 View 
              </Typography>
            </Box>
          </Link>
          <Link href="https://angular-jf.herokuapp.com/employeeList" target="_blank">
            <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
              <Typography color="inherit" className={classes.depositContext} align="center">
                  Angular-REST-API-CRUD
                </Typography>
              <Avatar alt="Remy Sharp" src="/images/angular-typescript.PNG" className={classes.bigAvatar} />
              <Typography color="inherit" className={classes.depositContext} align="center">
                 View 
              </Typography> 
            </Box>
          </Link>
          <Link href="https://springboot-jf.herokuapp.com/api/employeeList" target="_blank">
            <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
              <Typography color="inherit" className={classes.depositContext} align="center">
                  Spring-REST-API-CRUD
                </Typography>
              <Avatar alt="Remy Sharp" src="/images/springJpaMysql.PNG" className={classes.bigAvatar} />
              <Typography color="inherit" className={classes.depositContext} align="center">
                 View 
              </Typography> 
            </Box>
          </Link>
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