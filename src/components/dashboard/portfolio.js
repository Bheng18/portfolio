// /* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Title from './Title';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 0,
    width: 180,
    height: 150,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
              <Typography component="p" variant="subtitle2" align="center">
                 Click the image to see the project 
              </Typography>
              
    <Grid container justify="space-around" alignItems="center">
          {/* <Avatar alt="Remy Sharp" src="/images/benphoto.jpg" className={classes.avatar} /> */}
          <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
            <Link href="http://jca.x10host.com/JCAweb/" target="_blank">
                <Typography color="inherit" className={classes.depositContext} align="center">
                  Thesis Project
                </Typography>
                <CardMedia
                    className={classes.bigAvatar}
                    image="/images/thesisProject.PNG"
                    title="Paella dish"
                  />
                {/* <Avatar alt="Remy Sharp" src="/images/thesisProject.PNG" className={classes.bigAvatar}  /> */}
                <Typography color="inherit" className={classes.depositContext} align="center">
                  View Online
                </Typography>
            </Link>
            <Link href="http://jca.x10host.com/JCAweb/" target="_blank">
                <Typography color="inherit" className={classes.depositContext} align="center">
                  (None Github) 
                </Typography>
            </Link>
          </Box>  

          <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
            <Link href="https://mern-crud-jf.herokuapp.com/i2i/itemList/" target="_blank">
                <Typography color="inherit" className={classes.depositContext} align="center">
                    MERN-CRUD
                  </Typography>
                <Avatar alt="Remy Sharp" src="/images/mern.PNG" className={classes.bigAvatar} />
                <Typography color="inherit" className={classes.depositContext} align="center">
                  View Online
                </Typography>
            </Link>
            <Link href="https://github.com/Bheng18/MERN-CRUD" target="_blank">
                <Typography color="inherit" className={classes.depositContext} align="center">
                  View Github 
                </Typography>
            </Link>
          </Box>

          <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
              <Link href="https://angular-jf.herokuapp.com/employeeList" target="_blank">
              <Typography color="inherit" className={classes.depositContext} align="center">
                  Angular-REST-API-CRUD
                </Typography>
                <CardMedia
                  className={classes.bigAvatar}
                  image="/images/angular-typescript.PNG"
                  title="Paella dish"
                />
              {/* <Avatar alt="Remy Sharp" src="/images/angular-typescript.PNG" className={classes.bigAvatar} /> */}
              <Typography color="inherit" className={classes.depositContext} align="center">
                 View Online
              </Typography> 
              </Link>
              <Link href="https://github.com/Bheng18/Angular7-CRUD-REST-API-front-end" target="_blank">
                <Typography color="primary" className={classes.depositContext} align="center">
                  View Github
                </Typography>
              </Link>
            </Box>

            <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
              <Link href="https://springboot-jf.herokuapp.com/api/employeeList" target="_blank">
              <Typography color="inherit" className={classes.depositContext} align="center">
                  Spring-REST-API-CRUD
                </Typography>
              <Avatar alt="Remy Sharp" src="/images/springJpaMysql.PNG" className={classes.bigAvatar} />
              <Typography color="inherit" className={classes.depositContext} align="center">
                 View Online
              </Typography> 
              </Link>
              <Link href="https://github.com/Bheng18/springBoot-JPA-Hibernate-MySQL-REST-API-CRUD-back-end" target="_blank">
              <Typography color="inherit" className={classes.depositContext} align="center">
                 View Github
              </Typography>
              </Link>
            </Box>

            <Box bgcolor="background.paper" m={1} border={0} boxShadow={1} >
              <Link href="https://reactive-angular-springboot-webflux2019.netlify.com/" target="_blank">
              <Typography color="inherit" className={classes.depositContext} align="center">
                  SpringBoot-WebFlux
                </Typography>
                <CardMedia
                  className={classes.bigAvatar}
                  image="/images/webflux.PNG"
                  title="Paella dish"
                />
              {/* <Avatar alt="Remy Sharp" src="/images/webflux.PNG" className={classes.bigAvatar} /> */}
              <Typography color="inherit" className={classes.depositContext} align="center">
                 View Online
              </Typography> 
              </Link>
              <Link href="https://github.com/Bheng18/SpringBoot-ReactiveProgramming-Webflux" target="_blank">
              <Typography color="inherit" className={classes.depositContext} align="center">
                 View Github
              </Typography>
              </Link>
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