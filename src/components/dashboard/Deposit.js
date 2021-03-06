// /* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
// import Title from './Title';


const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 0,
    width: 160,
    height: 160,
  },
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div id="aboutMe">
      <br /><br /><br /><br />
      <Grid container justify="center" alignItems="center">
          {/* <Avatar alt="Remy Sharp" src="/images/benphoto.jpg" className={classes.avatar} /> */}
          <Avatar alt="Remy Sharp" src="/images/benphoto.jpg" className={classes.bigAvatar} />
          {/* <Typography color="primary" component="p" variant="subtitle1">
                  Joebert Fundador
          </Typography> */}
      </Grid>
      <Grid container justify="center" alignItems="center">
          <Typography color="primary" component="p" variant="subtitle1">
                  Joebert Fundador
          </Typography>
      </Grid>
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