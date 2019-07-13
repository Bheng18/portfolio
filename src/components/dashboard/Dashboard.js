import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './ListItems';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Chart from './Chart';
import Logo from './Logo'
import NameAddress from './NameAddress';
import Deposits from './Deposit';
import Orders from './Orders';
import SkillsQualifications from './SkillsQualifications';
import WorksExperience from './WorksExperience';
import SeminarWorkshopAttended from './SeminarsWorkshopAttended';
import Education from './Education';
import StudiesCompleted from './StudiesCompleted';
import Portfolio from './portfolio';
import ContactMe from './ContactMe';
import FrontEnd from './FrontEndDeveloper';
 
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©2019 My Portfolio & '}
      <Link color="inherit" href="http://jca.x10host.com/JCAweb/" target="_blank">
         Thesis Project
      </Link>
      {' by Joebert Fundador.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarColor: {
    backgroundColor: '#1a237e',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 310,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
// const printPdf = () => {
//   window.print();
// }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift, classes.appBarColor)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
             <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <Logo />
          </Typography>
          <IconButton color="inherit" >
            <ListItemLink href="#dashboard">
              <Typography component="h1" variant="h6" noWrap className={classes.title}>
                  Home
              </Typography>
            </ListItemLink>
          </IconButton>

          <IconButton color="inherit" >
            <ListItemLink href="#aboutMe">
              <Typography component="h1" variant="h6" noWrap className={classes.title}>
                 About Me
              </Typography>
            </ListItemLink>
          </IconButton>

          <IconButton color="inherit" >
            <ListItemLink href="#portfolio">
              <Typography component="h1" variant="h6" noWrap className={classes.title}>
                 Portfolio
              </Typography>
            </ListItemLink>
          </IconButton>

          <IconButton color="inherit" >
            <ListItemLink href="#contact">
              <Typography component="h1" variant="h6" noWrap className={classes.title}>
                 Contact Me
              </Typography>
            </ListItemLink>
            </IconButton>
          {/* <IconButton color="inherit" onClick={printPdf}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
               Print PDF
            </Typography>
          </IconButton> */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container} >
          <Grid container spacing={2}>

            {/* Objective */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                  <FrontEnd />
              </Paper>
            </Grid>

           {/* Recent Deposits */}
           <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
         
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                  <NameAddress />
              </Paper>
            </Grid>

            {/* Skills Qualifications */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <SkillsQualifications />
              </Paper>
            </Grid>

            {/* Works Experience */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <WorksExperience />
              </Paper>
            </Grid>

            {/* seminar and workshop attended */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <SeminarWorkshopAttended />
              </Paper>
            </Grid>

            {/* Education */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Education />
              </Paper>
            </Grid>

            {/* Studies Completed */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <StudiesCompleted />
              </Paper>
            </Grid>

             {/* Objective */}
             <Grid item xs={12} >
              <Paper className={classes.paper} >
                  <Portfolio />
              </Paper>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>

          {/* COntact Me */}
           <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ContactMe />
              </Paper>
            </Grid>

          </Grid>
        </Container>
        <MadeWithLove />
      </main>
    </div>
  );
}